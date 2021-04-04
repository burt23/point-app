const { Model, DataTypes } = require("sequelize");
const client = require("../db");
const { users } = require("../data");

class User extends Model {}

User.init(
  {
    phone: {
      type: DataTypes.NUMBER,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
    },
  },
  { sequelize: client, modelName: "user" }
);

User.sync()
  .then(() => {
    users.forEach(async (user) => {
      console.log("creating user...", user);
      await User.create(user);
      console.log("created user!");
    });
  })
  .catch((error) => console.error("unable to seed users into db...", error));

module.exports = User;
