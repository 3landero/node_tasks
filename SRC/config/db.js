const { Sequelize } = require("sequelize")



const host= process.env.HOST
const db= process.env.DATABASE
const user = process.env.USER
const password = process.env.PASSWORD


// MySql
const dataBase = new Sequelize(db, user,password, {
    host: host,
    dialect:'mysql',
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    } 
  });


module.exports = dataBase;