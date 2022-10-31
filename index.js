import express from 'express'
import './src/configs/db.js'
import router from './src/routes/router.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://notes-app-amber.vercel.app'],
  })
)
app.use('/', router)

const port = 3001

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
