import mongoose from 'mongoose';

const AnimalKingdomSchema = new mongoose.Schema({
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

AnimalKingdomSchema.pre('save', async function () {
  let roundedTime = await `${this.time.slice(0, 4)}0`;
  this.time = roundedTime;
});

export default mongoose.model('AnimalKingdomWaitTime', AnimalKingdomSchema);
