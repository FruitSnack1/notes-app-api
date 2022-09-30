import habitService from '../services/habit.service.js'

class HabitController {
  async getHabit(req, res) {
    const { id } = req.user
    const habits = await habitService.getHabit(id)
    res.json(habits)
  }

  async createHabit(req, res) {
    const { body } = req
    const { id } = req.user
    const habit = await habitService.createHabit(id, body)
    res.json(habit)
  }

  async updateHabit(req, res) {
    const { id } = req.params
    const { body } = req
    const habit = await habitService.updateHabit(id, body)
    res.json(habit)
  }

  async deleteHabit(req, res) {
    const { id } = req.params
    const habit = await habitService.deleteHabit(id)
    res.json(habit)
  }

  async restoreHabit(req, res) {
    const { id } = req.params
    const habit = await habitService.restoreHabit(id)
    res.json(habit)
  }
}

const habitController = new HabitController()
export default habitController
