import habitService from '../services/habit.service.js'

class HabitController {
  async getHabits(req, res) {
    const { id } = req.user
    const habits = await habitService.getHabits(id)
    res.json(habits)
  }
  async getHabit(req, res) {
    const { id } = req.user
    const habitId = req.params.id
    const habits = await habitService.getHabit(id, habitId)
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

  async writeEntry(req, res) {
    const { id } = req.params
    const { body } = req
    const habit = await habitService.writeEntry(id, body)
    res.json(habit)
  }

  async writeFrequency(req, res) {
    const { id } = req.params
    const { body } = req
    const habit = await habitService.writeFrequency(id, body)
    res.json(habit)
  }
}

const habitController = new HabitController()
export default habitController
