const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("loja", "root", "@Giovanni10", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;

