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
            id: id,
          },
        });
        return posts;
      } catch (error) {
        console.error("error getting posts", error);
      }
    },
  },
};

module.exports = resolvers;
