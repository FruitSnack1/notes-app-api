import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@notes-app-cluster.jcdxnm6.mongodb.net/?retryWrites=true&w=majority`,
  (err) => {
    if (err) console.log(err)
    else console.log('Connected to database...')
  }
)
