const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      logging: false, // comment this line to enable logging
      },
    },
  }
);


module.exports = db;

