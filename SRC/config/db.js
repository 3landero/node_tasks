//-Sequelize es el orm, obvio

const Sequelize = require('sequelize')
//--estas variables de ambiente pueden editarse en archivo .ENV
const host= process.env.HOST
const db= process.env.DATABASE
const user = process.env.USER
const password = process.env.PASSWORD

//--DB config inicial
const sequelize = new Sequelize(db, user,password, {
  host: host,
  dialect:'postgres',
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
//---agrega ingresa credenciales al gestor de base de datos
sequelize.authenticate().then(() => {
  console.log("db authenticated")
 });


const dB = {};

dB.sequelize = sequelize;
dB.Sequelize = Sequelize;
//--hacia los modelos
module.exports = dB;