const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handle');

// const { faker } = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

const whitelist = ['http://localhost:5500/', 'http://127.0.0.1:5500/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) !== 1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/new-endpoint', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
});

routerApi(app);
// Despues del routing middleware de error

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
