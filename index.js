const { Router } = require('express');
const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config({path:".env"})
const PORT = process.env.PORT || 3000;

const app = express();
const router = Router()


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

  const connect = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
}

connect()


// Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

const getAllTasks = async (req, res) =>{
    let tasks = await Task.findALL()
    res.status(200).send(tasks)
}

const getOneTask = async (req, res)=>{
    let id = req.params.id
    let task = await Task.findOne({
        where: {id:id}
    })
    res.status(200).send(task)
}

//TODO******* all customers 
router.get('/tasks', getAllTasks);
router.get('/task/:id', getOneTask);



// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));