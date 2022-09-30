import express from 'express'
import habitController from '../controllers/habit.controller.js'

const router = express.Router()
import userController from '../controllers/user.controller.js'
import { verifyToken } from '../utils/auth.js'

//User
router.post('/login', userController.login)
router.post('/register', userController.register)

//Habit
router.get('/habits', verifyToken, habitController.getHabit)
router.post('/habits', verifyToken, habitController.createHabit)
router.put('/habits/:id', verifyToken, habitController.updateHabit)
router.delete('/habits/:id', verifyToken, habitController.deleteHabit)
router.put('/habits/restore/:id', verifyToken, habitController.restoreHabit)

export default router
