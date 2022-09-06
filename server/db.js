import mongoose from 'mongoose';

export const connectDB = async (url) => {
  console.log('connecting to database!');
  return await mongoose.connect(url);
};
