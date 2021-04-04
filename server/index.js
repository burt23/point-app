const { ApolloServer } = require("apollo-server");
const resolvers = require("../graphql/resolvers");
const PointAppAPI = require("../dataSources/PointAppAPI");
const typeDefs = require("../graphql/typeDefs");
const express = require("express");
const { auth } = require("express-openid-connect");

const app = express();

const EXPRESS_PORT = 3000;
const PORT = process.env.PORT || 8000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "N1MUWRz21k3QMvUmji4DKxnXt6CNdNKX",
  issuerBaseURL: "https://dev-0c5cv0t2.us.auth0.com",
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ pointAppAPI: new PointAppAPI() }),
  context: () => ({ token: "foobarboobaz" }), // TODO: testing for auth
  playground: true,
  introspection: true,
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config), (req, res, next) => {
  console.log("inside auth middleware, logged in?", req.oidc.isAuthenticated());
  const { details: { body } = { body: "" } } = req;
  console.log("user infO??", body);
  if (req.oidc.isAuthenticated()) {
    res.redirect("http://localhost:8000");
  }
  next();
});

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  console.log("hit home route");
  // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  if (req.oidc.isAuthenticated()) {
    res.redirect("http://localhost:8000");
  } else {
    res.redirect("http://localhost:3000/login");
  }
});

app.listen(EXPRESS_PORT, () => {
  console.log("express up and running");
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
