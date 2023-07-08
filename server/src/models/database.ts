import mongoose, { Schema, model } from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + './../.env' });

mongoose.connect(`mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);

export { Schema, model };
