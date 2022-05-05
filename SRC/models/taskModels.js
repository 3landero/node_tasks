const Sequelize = require('sequelize')
const { default: dataBase } = require("../config/db");


  
  exports.Tasks = dataBase.define('Task',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    Title:Sequelize.STRING(50),
    Dead_line: Sequelize.DATE,
    Description: Sequelize.STRING(50),
    isCompleted: Sequelize.BOOLEAN,
    Priority_name: Sequelize.INTEGER(1),
    UserId: Sequelize.INTEGER(16)
});
