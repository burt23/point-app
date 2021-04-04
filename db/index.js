const { Sequelize } = require("sequelize");
const BASE_URL = require("../config");

const client = new Sequelize(BASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
  },
});

client
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = client;
