import User from '../models/user.model.js'
import { generateAccessToken, getHash } from '../utils/auth.js'

class UserService {
  async login(username, password) {
    try {
      const user = await this.getUser(username)
      const tokenUser = { id: user._id, username: user.username }
      const token = generateAccessToken(tokenUser)
      const hash = getHash(password)
      if (hash == user.password) return { token, username }
      return 0
    } catch (error) {}
  }

  async register(username, password) {
    try {
      const hashedPassword = getHash(password)
      const user = new User({
        username,
        password: hashedPassword,
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
