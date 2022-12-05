import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  hasDebt: {
    type: Boolean,
    required: true,
  },
  creditModifier: {
    type: Number,
  },
});

export default mongoose.model("User", UserSchema);
