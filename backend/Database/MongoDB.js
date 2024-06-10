import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `\nMongoDB connected !!`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
