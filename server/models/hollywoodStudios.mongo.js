import mongoose from 'mongoose';

const HollywoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  waitTime: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export default mongoose.model('HollywoodWaitTime', HollywoodSchema);
