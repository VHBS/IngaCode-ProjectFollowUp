import express from 'express';
import cors from 'cors';
import routes from './routes';
import errorMiddleware from './middlewares/error';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (_, res) => {
  res.send('<h1>Aplicação rodando</h1>');
});

app.use(errorMiddleware);

export default app;
