require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const dbConnected = require('./config.js');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === 'production') {
  console.log(`\nNODE_ENV= ${process.env.NODE_ENV}\n`);
  app.use(express.static('client/build'));
}

app.use(routes);

dbConnected
  .then(() =>
    app.listen(process.env.PORT, () => console.log('Server is running...'))
  )
  .catch((er) => console.error(err));
