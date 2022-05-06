const express = require('express');
const PORT = process.env.PORT || 3000;
const logger_morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path:".env"})

const app = express();
const router = require('./SRC/routes/routes')

app.use(express.json());
app.use(bodyParser.json());
app.use(logger_morgan('short'));

app.use(express.urlencoded({ extended: true }));

//admite cualquier domain
app.use(cors({
    origin: '*'
}));

app.use('/', router )

// Ruta principal con json de bienvenida
app.get('/', (req, res) => {
  res.json({message: 'Welcome to my API!'});
});


app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`);
});