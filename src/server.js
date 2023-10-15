const express = require('express')
//const knexConfig = require('./db/knexfile');
//const knex = require('knex')(knexConfig[process.env.NODE_ENV])
const betJob = require('./jobs/betJob')
const api = express()

betJob()



api.get('/bets', function(req, res) {


})


api.get('/bets:id', function(req, res) {

})

const PORT = 3333
api.listen(PORT)

