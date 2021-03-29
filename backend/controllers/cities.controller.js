const mongoose = require('mongoose')
const CitiesModel = require('../models/Cities.model')

exports.getAllCities = async (req, res, next) => {
    const cities = await CitiesModel.aggregate([
        {
			$lookup: {
				from: 'properties',
				localField: '_id',
				foreignField: 'cityId',
				as: 'properties'
			}
		}
    ])
    res.json(cities)
}

exports.createCity = async (req, res) => {
    const newCity = await new CitiesModel(req.body)

    newCity.save((err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'City created',
                data
            })
        }
    })

}

exports.getSingleCity = async (req, res) => {
    let cityName = req.params.name

    await CitiesModel.findOne({name: cityName}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'City found',
                data
            })
        }
    })
}

exports.getSingleCity = async (req, res) => {
    let cityId = req.params.id

    await CitiesModel.findOne({name: cityId}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'City found',
                data
            })
        }
    })
}

exports.updateCity = async (req, res) => {
    let cityID = req.params.id

    await CitiesModel.findByIdAndUpdate({_id: cityID}, {$set: req.body}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'City Updated',
                data
            })
        }
    })
}

exports.deleteCity = async (req, res) => {
    let cityID = req.params.id

    await Posts.deleteOne({_id: cityID}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'City Deleted',
                data
            })
        }
    })
}