import mongoose, { connect } from "mongoose";

const connectionToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:admin@myfirstcluster.9apc7.mongodb.net/inbankDB?retryWrites=true&w=majority"
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToMongo;
