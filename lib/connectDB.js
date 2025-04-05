import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Mongo DB is connected!!");
  } catch (err) {
    console.log(err?.message);
  }
}
export default connectDB;