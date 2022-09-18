import userService from '../services/user.service.js'
class UserController {
  login(req, res) {}

  async register(req, res) {
    console.log('register')
    const { username, password } = req.body
    const user = await userService.register(username, password)
    res.json(user)
  }
}

const userController = new UserController()

export default userController
