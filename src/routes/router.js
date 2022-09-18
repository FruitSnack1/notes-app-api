import express from 'express'

const router = express.Router()
import userController from '../controllers/user.controller.js'

router.get('/', (req, res) => {
  res.json({})
})
router.post('/login', userController.login)
router.post('/register', userController.register)

export default router
