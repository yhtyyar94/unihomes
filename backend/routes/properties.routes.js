const express = require('express')
const router = express.Router()

//import the controllers file for functions
const propertyController = require('../controllers/property.controller')


router.get('/getproperties', propertyController.getAllProperties)
router.get('/getproperties/:id', propertyController.getSingleProperty)
router.post('/createproperty', propertyController.createProperty)
router.put('/properties/:id/update', propertyController.updateProperty)
router.delete('/deleteproperty/:id', propertyController.deleteProperty)


module.exports = router