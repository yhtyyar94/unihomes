const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelper');
//import the controllers file for functions
const propertyController = require('../controllers/property.controller')


router.get('/getproperties', propertyController.getAllProperties)
router.get('/getproperties/:id', propertyController.getSingleProperty)
router.get('/getpropertiesbyuser/:userId', propertyController.getAllPropertiesByUser)
router.get('/getproperties/name/:name', propertyController.getSingleCity)
router.post('/createproperty', upload.array('images'), propertyController.createProperty)
router.put('/properties/update/:id', upload.array('images'), propertyController.updateProperty)
router.delete('/deleteproperty/:id', propertyController.deleteProperty)


module.exports = router