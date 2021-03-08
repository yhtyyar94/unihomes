const express = require('express')
const router = express.Router()

//import the controllers file for functions
const cityController = require('../controllers/cities.controller')

router.get('/', cityController.getAllCities)
router.get('/getcities', cityController.getAllCities)
router.get('/getcities/:name', cityController.getSingleCity)
router.get('/getcities/id/:id', cityController.getSingleCity)
router.post('/createcity', cityController.createCity)
router.put('/cities/:id/update', cityController.updateCity)
router.delete('/deletecity/:id', cityController.deleteCity)


module.exports = router
