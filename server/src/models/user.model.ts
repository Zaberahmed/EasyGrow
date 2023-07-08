import { Schema, model } from './database';

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: string;
  lands?: Schema.Types.ObjectId[] | undefined;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  lands: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
});

const UserModel = model<User>('User', UserSchema);

const createUser = async (userDetails: User) => {
  try {
    return await UserModel.create(userDetails);
  } catch (error) {
    console.log(error);
  }
};

const findUserByEmail = async (email: string) => {
  try {
    return await UserModel.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
};

const updatePassword = async (email: string, newPassword: string) => {
  try {
    await UserModel.findOneAndUpdate({ email: email }, { password: newPassword });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { createUser, findUserByEmail, updatePassword };
