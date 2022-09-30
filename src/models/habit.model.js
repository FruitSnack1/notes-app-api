import mongoose from 'mongoose'
import User from './user.model.js'

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  frequency: {
    type: [Boolean],
    default: new Array(7).fill(false),
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
})

const Habit = mongoose.model('Habit', habitSchema)
export default Habit
