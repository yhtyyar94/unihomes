const express = require('express')
const router = express.Router()

//import the controllers file for functions
const agentController = require('../controllers/agents.controller')


router.post('/', agentController.create)



module.exports = router