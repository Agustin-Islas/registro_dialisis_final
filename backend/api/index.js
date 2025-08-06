import serverless from 'serverless-http';
import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

app.get('/registros', (req, res) => {
  res.json({ mensaje: '¡Express y rutas funcionando en Vercel!' });
});

export default serverless(app);
