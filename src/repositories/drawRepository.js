const knexConfig = require('../../knexfile.js')[process.env.ENV || 'development']
const knex = require('knex')(knexConfig)
const bcrypt = require('bcryptjs')

const add = async (drawn) => await knex('draws').insert(drawn) 
const findById = async (id) => await knex('draws').where({id}) 
const list = async () => await knex('draws') 

module.exports = {
  add,
  findById,
  list
}