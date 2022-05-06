//Datatypes y Sequelize hacen exactamente lo mismo, usara preferentemente datatypes
const DataTypes = require('sequelize/lib/data-types');
const dB = require('../config/db')

//Define modelo Users
exports.Users = dB.sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    Name:DataTypes.STRING(50),
    Last_Name: DataTypes.STRING(50),
    Email: DataTypes.STRING(50),
    Password: DataTypes.STRING(50)
});

