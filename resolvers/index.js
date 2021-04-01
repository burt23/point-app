const { users, posts } = "../data"; // TODO posts

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = resolvers;
