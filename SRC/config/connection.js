const dataBase = require("./db");

const connectDatabase = async()=>{
    try {
        await dataBase.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
}

module.exports = connectDatabase;