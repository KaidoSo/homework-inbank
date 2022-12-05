import userModel from "../models/inbankModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();

    res.status(202).json(allUsers);
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const User = await userModel.findOne({ userId: req.params.id });
    res.status(200).json(User);
  } catch (error) {
    console.error(error);
  }
};
