const mongoose = require('mongoose')
const PropertiesModel = require('../models/Property.model')

exports.getAllProperties = async (req, res) => {
    const properties = await PropertiesModel.find()
    res.json(properties)
}

exports.getSingleProperty = async (req, res) => {
    const propertyId = req.params.propertyId

    await PropertiesModel.findById({_id:propertyId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property found', data})
        }
    })
}

exports.createProperty = async (req, res) => {
    const newProperty = await new PropertiesModel(req.body)

    newProperty.save((err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property created', data})
        }
    })
}

exports.updateProperty = async (req, res) => {
    const propertyId = req.params.propertyId

    await PropertiesModel.findByIdAndUpdate({_id: propertyId}, {$set: req.body}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property updated', data})
        }
    })
}

exports.deleteProperty = async (req, res) => {
    const propertyId = req.params.propertyId

    await PropertiesModel.deleteOne({_id:propertyId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property deleted', data})
        }
    })
}