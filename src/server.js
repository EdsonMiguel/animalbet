const express = require('express')
const betJob = require('./jobs/betJob')
const { findById, list } = require('./repositories/drawRepository')
const api = express()

betJob()


api.get('/draws', async function(req, res) {
  try {
    const data = await  list()
    res.send(data)  
  } catch (error) {
    res.status(404).send("Not found") 
  }
})


api.get('/draws:id', async function(req, res) {
  try {
    const { id } = req.params
    const data = await  findById(id)
    res.send(data)  
  } catch (error) {
    res.status(404).send("Not found") 
  }
})

const PORT = 3333
api.listen(PORT)

