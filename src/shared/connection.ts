import { Sequelize } from "sequelize"; // Use sequelize ao invés de @sequelize/core

const sequelize = new Sequelize("banco_api", "root", "123456", {
  host: "localhost",
  dialect: "sqlite", 
});

export default sequelize;
