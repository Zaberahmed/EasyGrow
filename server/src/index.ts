import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routers/router';
import mongoose from 'mongoose';

const app: Application = express();

require('dotenv').config({ path: __dirname + '/.env' });

const corsConfig = {
	origin: process.env.CLIENT_LINK,
	credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(router);

mongoose.connection.on('open', () => {
	console.log('🍃 Connection to DB is open!');
});

app.listen(process.env.SERVER_PORT, () => {
	console.log(`🚀 Server is listening on port ${process.env.SERVER_PORT}!`);
});
