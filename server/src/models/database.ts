import mongoose, { Schema, Types, model } from 'mongoose';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '..', '/.env') });
const uri = `${process.env.ATLAS_DATABASE_URL}`;

// mongoose.connect(
//   `mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
// );
try {
	mongoose.connect(uri);
} catch (error) {
	console.log(error);
}

export { Schema, Types, model };
