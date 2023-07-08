import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routers/router';

import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const app: Application = express();

const corsConfig = {
  origin: `http://localhost:${process.env.CLIENT_PORT}`,
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on port ${process.env.SERVER_PORT}!`);
});
