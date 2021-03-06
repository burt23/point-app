const { Sequelize } = require("sequelize");
const { WANTS_DEV_MODE, DB_URL } = require("../config");

const client = new Sequelize(DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: WANTS_DEV_MODE ? false : true,
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
