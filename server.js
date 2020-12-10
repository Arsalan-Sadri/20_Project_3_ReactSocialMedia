require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

app.use(morgan('common'));
app.use(cors);
app.use(helmet);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.use(routes);

require('./config.js')
  .then(() =>
    app.listen(process.env.PORT, () => console.log('Server is running...'))
  )
  .catch((err) => console.error(err));
