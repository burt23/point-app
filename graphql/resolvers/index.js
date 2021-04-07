const Post = require("../../models/post");
const User = require("../../models/user");
{
  /**
 Resolvers Map
 Define's the technique for fetching the types defined in the schema. 
 The map below corresponds the the schema declarations in the typeDefs file.
 Supported fields include Query, Mutation, Subscription keys. See [https://graphql.org/](graphql
 docs) for further info.
 */
}
const resolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = Post.findAll();
        return posts;
      } catch (error) {
        console.error("error getting posts", error);
        throw new Error(error);
      }
    },
    users: async () => {
      try {
        const users = User.findAll();
        return users;
      } catch (error) {
        console.error("error getting users", error);
        throw new Error(error);
      }
    },
    getPost: async (parent, { id }) => {
      try {
        const posts = Post.findOne({
          where: {
            id,
          },
        });
        return posts;
      } catch (error) {
        console.error("error getting post", error);
        throw new Error(error);
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
        throw new Error(error);
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
        throw new Error(error);
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
        throw new Error(error);
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
    deletePost: async (_, { id }) => {
      try {
        const post = await Post.destroy({ where: { id } });
        return post;
      } catch (error) {
        console.error(
          `Unable to complete deletePost Mutation.\n Error: ${error}, `
        );
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
