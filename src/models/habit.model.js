import mongoose from 'mongoose'
import User from './user.model.js'

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  frequency: {
    mo: Boolean,
    tu: Boolean,
    we: Boolean,
    th: Boolean,
    fr: Boolean,
    sa: Boolean,
    su: Boolean,
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
