const dB = require("./db");

const connectDatabase = async()=>{
    try {
        await dB.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
}

module.exports = connectDatabase;