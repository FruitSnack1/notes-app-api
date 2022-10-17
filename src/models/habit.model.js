import mongoose from 'mongoose'
import User from './user.model.js'

const frequencySchema = new mongoose.Schema({
  mo: Boolean,
  tu: Boolean,
  we: Boolean,
  th: Boolean,
  fr: Boolean,
  sa: Boolean,
  su: Boolean,
})

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  frequency: {
    mo: { type: Boolean, default: false },
    tu: { type: Boolean, default: false },
    we: { type: Boolean, default: false },
    th: { type: Boolean, default: false },
    fr: { type: Boolean, default: false },
    sa: { type: Boolean, default: false },
    su: { type: Boolean, default: false },
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.ObjectId,
    ref: User,
  },
  entries: [
    {
      status: Number,
      date: Date,
    },
  ],
})

const Habit = mongoose.model('Habit', habitSchema)
export default Habit
