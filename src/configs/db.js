import mongoose from 'mongoose'

mongoose.connect(
  `mongodb+srv://${process.DB_USER}:${process.DB_PASS}@notes-app-cluster.jcdxnm6.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log('Connected to database...')
  }
)
