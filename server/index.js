const express = require("express");
const resolvers = require("../graphql/resolvers");
const typeDefs = require("../graphql/typeDefs");
const { auth } = require("express-openid-connect");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { authConfig, PORT, BASE_URL } = require("../config");

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(authConfig));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${BASE_URL}:${PORT}`);
});
