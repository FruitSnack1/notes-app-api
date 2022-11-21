import express from 'express'
import habitController from '../controllers/habit.controller.js'

const router = express.Router()
import userController from '../controllers/user.controller.js'
import { verifyToken } from '../utils/auth.js'

//User
router.post('/login', userController.login)
router.post('/register', userController.register)
router.put('/user', verifyToken, userController.updateUser)

//Habit
router.get('/habits', verifyToken, habitController.getHabits)
router.get('/habits/:id', verifyToken, habitController.getHabit)
router.post('/habits', verifyToken, habitController.createHabit)
router.put('/habits/:id', verifyToken, habitController.updateHabit)
router.delete('/habits/:id', verifyToken, habitController.deleteHabit)
router.put('/habits/restore/:id', verifyToken, habitController.restoreHabit)
router.put('/habits/entry/:id', verifyToken, habitController.writeEntry)
router.put('/habits/frequency/:id', verifyToken, habitController.writeFrequency)

export default router
