const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/registros', (req, res) => {
  res.json({ mensaje: '¡Express y rutas funcionando en Vercel!' });
});

module.exports = serverless(app);
