import mongoose from 'mongoose';

const EpcotSchema = new mongoose.Schema({
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
    type: Date,
  },
});

export default mongoose.model('EpcotWaitTime', EpcotSchema);
