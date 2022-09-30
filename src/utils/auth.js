import jwt from 'jsonwebtoken'
import crypto from 'crypto-js'

export const verifyToken = (req, res, next) => {
  console.log(req.cookies)
  const { token } = req.cookies
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

export const generateAccessToken = (data) => {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET)
}

export const genereateRefreshToken = (data) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET)
}

export const getHash = (password) => {
  return crypto.SHA256(password).toString()
}
