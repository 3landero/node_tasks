// const Sequelize = require(Sequelize)
const DataTypes = require('sequelize/lib/data-types');

//import dataBase from ('../config/db')
const dB = require('../config/db')


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

