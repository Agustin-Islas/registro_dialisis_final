const serverless = require('serverless-http');
const express = require('express');

const app = express();

app.get('/registros', (req, res) => {
  res.json({ mensaje: 'registros ok desde express' });
});

module.exports = serverless(app);
