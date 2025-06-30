const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
const Task = db.define("task", {
  title:
  {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:
  {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed:
  {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }

  // You should define the following columns:
  // - title: string, required
  // - description: string, required
  // - completed: boolean, default false
});

module.exports = Task;
