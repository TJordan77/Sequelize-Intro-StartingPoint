const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 2: Define the User model here
const User = db.define("user", {
  user_id:
  {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name:
  {
    type: DataTypes.STRING,
  },
});

module.exports = User;
