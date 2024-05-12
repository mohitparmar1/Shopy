import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected To MongoDB");
  } catch (err) {
    console.log("DB Disconnected");
    process.exit(1);
  }
};

export default connectDB;