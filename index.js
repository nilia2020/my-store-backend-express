const express = require('express');
const routerApi = require('./routes');

// const { faker } = require('@faker-js/faker');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/new-endpoint', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
});

routerApi(app);

app.listen(port, () => {});
