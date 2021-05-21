import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import appRoutes from './routes/tinder_routes.js'

// Do this for require method to work for .env files
import dotEnv from 'dotenv'
dotEnv.config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('/profiles', appRoutes)

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URI

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => app.listen(PORT, () => 
    console.log(`Connection established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)