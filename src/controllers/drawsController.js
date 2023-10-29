const { list, findById } = require('../repositories/drawRepository')

async function getAll(req, res) {
  try {
    const data = await  list()
    res.send(data)  
  } catch (error) {
    res.status(404).send("Not found") 
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params
    const data = await findById(id)
    res.send(data)  
  } catch (error) {
    res.status(404).send("Not found") 
  }
}

module.exports = {
  getAll,
  getById
}