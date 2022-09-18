import User from '../models/user.model.js'

class UserService {
  async login() {}

  async register(username, password) {
    try {
      const user = new User({
        username,
        password,
      })
      return await user.save()
    } catch (error) {
      console.log(error)
    }
  }

  async getUser(username) {
    try {
      return User.find({ username })
    } catch (error) {
      console.log(error)
    }
  }
}

const userService = new UserService()
export default userService
