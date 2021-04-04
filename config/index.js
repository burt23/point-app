const {
  DATABASE_URL = "https://pointappgraphql.herokuapp.com/",
  DEV_MODE = false,
} = process.env;

const LOCAL_URL = "postgres://dashurpa@dashurpas-MacBook-Pro:5432/graphql";
const BASE_URL = DEV_MODE
  ? LOCAL_URL
  : "https://pointappgraphql.herokuapp.com/";

module.exports = { BASE_URL };
