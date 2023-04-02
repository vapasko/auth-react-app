require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {Sequelize} = require('sequelize')
const userRouter = require('./routers/user.router')

const PORT = process.env.PORT || 7000;
const sequelize = new Sequelize(process.env.DB_URI)

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', userRouter)

const startServer = async () => {
    try {
        await sequelize.authenticate();
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })

    } catch (error) {
        console.error(`${error.name}: ${error.message}`)
    }
}

startServer()