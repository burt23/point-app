const { users, posts } = require("../../data"); // TODO posts
const Post = require("../../models/post");
const User = require("../../models/Users");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => users,
    getPosts: async () => {
      try {
        const posts = Post.findAll();
        return posts;
      } catch (error) {
        console.error("error getting posts", error);
      }
    },
    getUsers: async () => {
      try {
        const users = User.findAll();
        return users;
      } catch (error) {
        console.error("error getting users", error);
      }
    },
    posts: () => posts,
  },
};

module.exports = resolvers;
