const express = require('express')
const cors = require('cors')
const env = require('dotenv') 
const betJob = require('./jobs/betJob')
const { getAll, getById } = require('./controllers/drawsController')

env.config()

const api = express()
api.use(cors())

betJob()
api.get('/draws', getAll)
api.get('/draws/:id', getById)

const { PORT } = process.env
api.listen(PORT, function(){
  console.log(`Server listen port: ${PORT}`)
})

