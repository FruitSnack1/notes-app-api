import Habit from '../models/habit.model.js'

class HabitService {
  async getHabit(id) {
    return await Habit.find({ user: id })
  }

  async createHabit(user, body) {
    const habit = new Habit({ ...body, user })
    return await habit.save()
  }

  async updateHabit(id, body) {
    return await Habit.findOneAndUpdate({ id }, { $set: body }, { new: true })
  }

  async deleteHabit(id) {
    return await Habit.findOneAndUpdate(
      { id },
      { $set: { deleted: true } },
      { new: true }
    )
  }

  async restoreHabit(id) {
    return await Habit.findOneAndUpdate(
      { id },
      { $set: { deleted: false } },
      { new: true }
    )
  }
}

const habitService = new HabitService()
export default habitService
