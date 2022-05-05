const { Router } = require('express');
const express = require('express');
require('dotenv').config({path:".env"})
const PORT = process.env.PORT || 3000;

const app = express();
const logger_morgan = require('morgan')
const router = Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDatabase = require('./SRC/config/connection');


app.use(express.json())

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));




app.use(cors({
    origin: '*'
}));


app.use(logger_morgan('short'))

connectDatabase();


// Route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to my API!'});
});


//TODO******* all customers 


// Check connect
// connection.connect(error => {
//   if (error) throw error;
//   console.log('Database server running!');
// });

app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`);
});