const Post = require("../../models/post");
const User = require("../../models/user");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = Post.findAll();
        return posts;
      } catch (error) {
        console.error("error getting posts", error);
      }
    },
    users: async () => {
      try {
        const users = User.findAll();
        return users;
      } catch (error) {
        console.error("error getting users", error);
      }
    },
    getPosts: async (parent, { id }) => {
      try {
        const posts = Post.findAll({
          where: {
            userId: id,
          },
        });
        return posts;
      } catch (error) {
        console.error("error getting posts", error);
      }
    },
    getUser: async (parent, { id }) => {
      try {
        const user = User.findOne({
          where: {
            id,
          },
        });
        return user;
      } catch (error) {
        console.error("error getting posts", error);
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const user = new User(input);
        await user.save();
        return user;
      } catch (error) {
        console.error(
          `Unable to complete createUser Mutation.\n Error: ${error}, `
        );
      }
    },
    createPost: async (_, { input }) => {
      try {
        const post = new Post(input);
        await post.save();
        return post;
      } catch (error) {
        console.error(
          `Unable to complete createPost Mutation.\n Error: ${error}, `
        );
        throw new Error(error);
      }
    },
    editPost: async (_, { id, input }) => {
      try {
        const post = await Post.findOne({ where: { id } });
        await post.update(input);
        return post;
      } catch (error) {
        console.error(
          `Unable to complete createPost Mutation.\n Error: ${error}, `
        );
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
