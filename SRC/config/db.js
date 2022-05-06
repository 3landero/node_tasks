//const { Sequelize } = require("sequelize")

const Sequelize = require('sequelize')

const host= process.env.HOST
const db= process.env.DATABASE
const user = process.env.USER
const password = process.env.PASSWORD

// MySql
// exports.dataBase = new Sequelize(db, user,password, {
//     host: host,
//     dialect:'mysql',
//     define: {
//       timestamps: false
//     },
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     } 
//   });


//module.exports = dataBase;

//*************************** */



const sequelize = new Sequelize(db, user,password, {
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

sequelize.authenticate().then(() => {
  console.log("db authenticated")
 });


const dB = {};

dB.sequelize = sequelize;
dB.Sequelize = Sequelize;

module.exports = dB;