const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const registroRoutes = require('./routes/registros');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', registroRoutes);

module.exports = app;
