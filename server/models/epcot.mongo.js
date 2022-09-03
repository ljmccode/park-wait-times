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
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

EpcotSchema.pre('save', function () {
  let roundedTime = `${this.time.slice(0, 4)}0`;
  this.time = roundedTime;
});

export default mongoose.model('EpcotWaitTime', EpcotSchema);
