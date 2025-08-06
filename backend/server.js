import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import registroRoutes from './routes/registros';

const app = express();

app.use(cors());
app.use(json());
app.use('/', registroRoutes);

export default app;
