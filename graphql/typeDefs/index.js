const typeDefs = `
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.
  type User {
    email: String
    phone: String
    password: String
  }

  type Post {
    userId: String
    body: String
    title: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more Users (defined above).
  type Query {
    users: [User]
    getUser(id: ID!): User
    posts: [Post]
    getPosts(id: ID!): [Post]
  }`;

module.exports = typeDefs;
