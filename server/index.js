const { ApolloServer } = require("apollo-server");
const resolvers = require("../graphql/resolvers");
const PointAppAPI = require("../dataSources/PointAppAPI");
const typeDefs = require("../graphql/typeDefs");

const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ pointAppAPI: new PointAppAPI() }),
  context: () => ({ token: "foobarboobaz" }), // TODO: testing for auth
  playground: true,
  introspection: true,
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
