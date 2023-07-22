import mongoose, { Schema, Types, model } from 'mongoose';

require('dotenv').config();

mongoose.connect(
  `mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
);

export { Schema, Types, model };
