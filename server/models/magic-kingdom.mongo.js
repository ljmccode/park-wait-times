import mongoose from 'mongoose';

const MagicKingdomSchema = new mongoose.Schema({
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

export default mongoose.model('MagicKingdomTime', MagicKingdomSchema);

MagicKingdomSchema.pre('save', function () {
  let roundedTime = `${this.time.slice(0, 4)}0`;
  console.log(roundedTime);
  this.time = roundedTime;
});
