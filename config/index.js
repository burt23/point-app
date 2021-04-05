const PORT = 3000;

// you may need to run ```createdb graphql``` from the cmd line if don't already have a db named "graphql"
const LOCAL_DB = "postgres://localhost:5432/graphql";
const LOCAL_URL = `http://localhost:${PORT}`;

const { DATABASE_URL = "", DEV_MODE = false } = process.env;
const DB_URL = DEV_MODE ? LOCAL_DB : DATABASE_URL;
const BASE_URL = !!DEV_MODE ? LOCAL_URL : "pointappgraphql.herokuapp.com";

const {
  ISSUER_BASE_URL: issuerBaseURL,
  CLIENT_ID: clientID,
  POINT_APP_SECRET: secret,
} = process.env;

const authConfig = {
  baseURL: BASE_URL,
  authRequired: true,
  auth0Logout: true,
  issuerBaseURL,
  clientID,
  secret,
};

module.exports = { DEV_MODE, DB_URL, BASE_URL, authConfig, PORT };
