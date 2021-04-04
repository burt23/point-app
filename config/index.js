const { DATABASE_URL, DEV_MODE = false } = process.env;

const BASE_URL = DEV_MODE
  ? DATABASE_URL
  : "https://pointappgraphql.herokuapp.com/";

module.exports = { BASE_URL };
