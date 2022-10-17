import Habit from '../models/habit.model.js'

class HabitService {
  async getHabits(id) {
    return await Habit.find({ user: id })
  }

  async getHabit(id, habitId) {
    return await Habit.findOne({ user: id, _id: habitId })
  }

  async createHabit(user, body) {
    const habit = new Habit({ ...body, user })
    return await habit.save()
  }

  async updateHabit(id, body) {
    console.log('updating habit', id)
    return await Habit.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    )
  }

  async deleteHabit(id) {
    return await Habit.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    )
  }

  async restoreHabit(id) {
    return await Habit.findOneAndUpdate(
      { _id: id },
      { $set: { deleted: false } },
      { new: true }
    )
  }

  async writeEntry(id, body) {
    const habit = await Habit.findById(id)
    let found = habit.entries.find((e) => e.date.toISOString() == body.date)
    if (found) found.status = body.status
    else habit.entries = [...habit.entries, body]
    return habit.save()
  }

  async writeFrequency(id, body) {
    const key = Object.keys(body.frequency)[0]
    return Habit.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          [`frequency.${key}`]: body.frequency[key],
        },
      }
    )
  }
}

const habitService = new HabitService()
export default habitService
