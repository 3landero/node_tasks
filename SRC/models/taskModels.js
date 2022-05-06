//Usar datatypes
const DataTypes = require('sequelize/lib/data-types');
//importa la clase database
const dB = require('../config/db')
  
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
