const {
  DATABASE_URL = "https://pointappgraphql.herokuapp.com/",
  DEV_MODE = false,
} = process.env;

const LOCAL_URL = "postgres://localhost:5432/graphql";

const BASE_URL = DEV_MODE ? LOCAL_URL : DATABASE_URL;

module.exports = { DEV_MODE, BASE_URL };
