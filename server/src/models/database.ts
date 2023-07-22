import mongoose, { Schema, Types, model } from 'mongoose';

require('dotenv').config({ path: __dirname + '../.env' });

mongoose.connect(`mongodb://127.0.0.1:27017/EasyGrow_Test`);

export { Schema, Types, model };
