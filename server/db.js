import mongoose from 'mongoose';

export const connectDB = (url) => {
  console.log('connecting to database!');
  return mongoose.connect(url);
};
