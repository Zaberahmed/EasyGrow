import { Schema, Types, model } from './database';

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: string;
  lands?: Types.ObjectId[] | undefined;
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
  lands: [
    {
      type: Types.ObjectId,
      required: false,
    },
  ],
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
    return await UserModel.findOneAndUpdate({ email: email }, { password: newPassword });
  } catch (error) {
    console.log(error);
  }
};

const addALandByLandId = async (userId: Types.ObjectId, landId: Types.ObjectId) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { lands: landId } },
      { new: true }
    );

    return user;
  } catch (error) {
    console.log(error);
  }
};

const removeALandByLandId = async (userId: Types.ObjectId, landId: Types.ObjectId) => {
  try {
    return await UserModel.updateOne({ _id: userId }, { $pull: { lands: landId } });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, findUserByEmail, updatePassword, addALandByLandId, removeALandByLandId };
