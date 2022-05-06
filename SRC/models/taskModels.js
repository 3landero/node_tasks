//const Sequelize = require('sequelize')

const DataTypes = require('sequelize/lib/data-types');
//const dataBase = require('../config/db')
const dB = require('../config/db')
  //sequelize = dB.sequelize,
  //Sequelize = dB.Sequelize;

  
  exports.Tasks = dB.sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    Title:DataTypes.STRING(50),
    Dead_line: DataTypes.DATE,
    Description: DataTypes.STRING(50),
    isCompleted: DataTypes.BOOLEAN,
    Priority_name: DataTypes.INTEGER(1),
    UserId: DataTypes.INTEGER(16)
});
