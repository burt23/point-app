const { DATABASE_URL = "", DEV_MODE = false } = process.env;

// you may need to run ```createdb graphql``` from the cmd line if don't already have a db named "graphql"
const LOCAL_URL = "postgres://localhost:5432/graphql";

const BASE_URL = DEV_MODE ? LOCAL_URL : DATABASE_URL;

module.exports = { DEV_MODE, BASE_URL };
