const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routers/user.router')

const PORT = process.env.PORT || 7000;

const app = express()

app.use(express.json())
app.use('/api', router)

const startServer = async () => {
  try {
    
    app.listen(PORT, () => {
      console.log(`Server start on port ${PORT}`)
    })

  } catch (error) {
    console.error(`${error.name}: ${error.message}`)
  }
}

startServer()