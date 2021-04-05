const PORT = 3000;

// you may need to run ```createdb graphql``` from the cmd line if don't already have a db named "graphql"
const LOCAL_DB = "postgres://localhost:5432/graphql";
const LOCAL_URL = `http://localhost:${PORT}`;

const {
  DATABASE_URL = "",
  DEV_MODE = false,
  POINT_APP_POSTGRES_DB = false,
} = process.env;
const WANTS_DEV_MODE = DEV_MODE == "false" ? false : true;

console.log("point test", POINT_APP_POSTGRES_DB == "false");

const DB_URL = POINT_APP_POSTGRES_DB == "false" ? DATABASE_URL : LOCAL_DB;
const BASE_URL = WANTS_DEV_MODE
  ? LOCAL_URL
  : "https://pointappgraphql.herokuapp.com";

console.log("heroku debug\n", {
  WANTS_DEV_MODE,
  DEV_MODE,
  DB_URL,
  BASE_URL,
  POINT_APP_POSTGRES_DB,
});

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

module.exports = { WANTS_DEV_MODE, DB_URL, BASE_URL, authConfig, PORT };
