import userService from '../services/user.service.js'

class UserController {
  async login(req, res) {
    const { username, password } = req.body
    const user = await userService.login(username, password)
    if (user) {
      res.cookie('token', user.token, {
        sameSite: 'None',
        secure: true,
      })
      res.status(200).json(user)
    } else res.status(401).json({ message: 'wrong password' })
  }

  async register(req, res) {
    const { username, password, passwordAgain } = req.body
    const exists = await userService.getUser(username)
    if (exists)
      return res.status(500).json({ message: 'username already used' })
    const user = await userService.register(username, password)
    res.json(user)
  }
}

const userController = new UserController()

export default userController
