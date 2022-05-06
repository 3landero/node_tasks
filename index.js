const express = require('express');
require('dotenv').config({path:".env"})
const PORT = process.env.PORT || 3000;

const app = express();
const logger_morgan = require('morgan')

const bodyParser = require('body-parser');
const cors = require('cors');
//const connectDatabase = require('./SRC/config/connection');
const router = require('./SRC/routes/routes')

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger_morgan('short'));

app.use(cors({
    origin: '*'
}));

//connectDatabase();

app.use('/', router )

// Route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to my API!'});
});


app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`);
});