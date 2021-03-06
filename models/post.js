const { Model, DataTypes } = require("sequelize");
const client = require("../db");
const { posts } = require("../data");

class Post extends Model {}

Post.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { sequelize: client, modelName: "post" }
);

Post.sync()
  .then(() => {
    posts.forEach(async (post) => {
      console.log("creating post...", post);
      await Post.create(post);
      console.log("created post!");
    });
  })
  .catch((error) => console.error("unable to seed posts into db...", error));

module.exports = Post;
