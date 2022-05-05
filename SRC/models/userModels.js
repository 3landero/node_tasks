const Sequelize = require(Sequelize)
const { Sequelize } = require("sequelize/types");
const { default: dataBase } = require("../config/db");

exports.Users = dataBase.define('users', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    Name:Sequelize.STRING(50),
    Last_Name: Sequelize.STRING(50),
    Email: Sequelize.STRING(50),
    Password: Sequelize.STRING(50)
});

