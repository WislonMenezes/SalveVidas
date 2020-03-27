const express = require('express');
const crypto = require('crypto');//este comando he de criptografia

const OngController = require('./controllers/OngControlers')
const insidentsController = require('./controllers/InsidentsControllers')
const ProfileController = require('./controllers/ProfileControllers')
const SessionController = require('./controllers/SessionControllers')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)//rota para listar casos 

routes.get('/insidents', insidentsController.index)
routes.post('/insidents', insidentsController.create)
routes.delete('/insidents/:id', insidentsController.delete)

module.exports = routes;