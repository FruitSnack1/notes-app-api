import User from '../models/user.model.js'

class UserService {
  async login(username, password) {
    try {
      const user = await this.getUser(username)
      if (password == user.password) return user
      return 0
    } catch (error) {}
  }

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
      return User.findOne({ username })
    } catch (error) {
      console.log(error)
    }
  }
}

const userService = new UserService()
export default userService
