const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("../resolvers");
const PointAppAPI = require("../dataSources/PointAppAPI");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
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
    posts: [Post]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ pointAppAPI: new PointAppAPI() }),
  context: () => ({ token: "foobarboobaz" }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
