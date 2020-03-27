/**
 * estes dois codigos sao para importar as extenssoes da DB.
 */
const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection;