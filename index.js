import express from 'express'
import './src/configs/db.js'
import router from './src/routes/router.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

const port = 3001

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
