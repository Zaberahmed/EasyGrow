import mongoose, { Schema, Types, model } from 'mongoose';
import path from 'path';

require('dotenv').config();
const uri =
  'mongodb+srv://Rafia:KR8iUxByA15sHRPl@cluster0.enbhqa0.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(
//   `mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
// );
try {
  mongoose.connect(uri);
} catch (error) {
  console.log(error);
}

export { Schema, Types, model };
