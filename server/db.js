import mongoose from 'mongoose';

export const connectDB = (url) => {
  console.log(url);
  return mongoose.connect(url, (err) => {
    if (err) console.log(err);
    else console.log('mongodb is connected');
  });
};
