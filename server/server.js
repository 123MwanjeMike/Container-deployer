import express from 'express'
import cors from 'cors'
import configRoutes from './src/routes'

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

configRoutes(app)

export default app