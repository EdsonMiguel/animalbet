const knexConfig = require('../../db/knexfile')[process.env.ENV || 'development']
const knex = require('knex')(knexConfig)

const add = async (drawn) => await knex('draws').insert(drawn) 
const findById = async (id) => await knex('draws').where({id}) 
const list = async () => await knex('draws') 

module.exports = {
  add,
  findById,
  list
}