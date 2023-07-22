import mongoose, { Schema, Types, model } from 'mongoose';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

mongoose.connect(`mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);

export { Schema, Types, model };
