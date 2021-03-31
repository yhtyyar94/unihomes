const mongoose = require('mongoose')
const PropertiesModel = require('../models/Property.model')

const singleFileUpload = async (req, res, next) => {
    try {
        const file = new SingleFileModel({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2)
        })
        await file.save((err, data) => {
            if(err) {
                res.status(500).json({message:err})
            } else {
                res.status(200).json({message:'File Uploaded Successfully', data})
            }
        })
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const multipleFileUpload = async (req, res, next) => {
    try {
        let filesArray = []
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file)
        })
        const multipleFiles = new MultipleFilesModel({
            title: req.body.title,
            files: filesArray
        })

        await multipleFiles.save((err, data) => {
            if(err) {
                res.status(500).json({message:err})
            } else {
                res.status(200).json({message:'Files Uploaded Successfully', data})
            }
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllSingleFiles = async (req, res, next) => {
    try {
        const files = await SingleFileModel.find()
        res.status(200).json(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllMultipleFiles = async (req, res, next) => {
    try {
        const files = await MultipleFilesModel.find()
        res.status(200).json(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 Bytes'
    }

    const dm = decimal || 2
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
    const index = Math.floor(Math.log(bytes) / Math.log(1000))

    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}

/////////////////////////////////////////////////////////////////////

exports.getAllProperties = async (req, res) => {
    const properties = await PropertiesModel.find()
    res.json(properties)
}

exports.getAllPropertiesByUser = async (req, res) => {
    const id = req.params.userId
    const properties = await PropertiesModel.find({user: id})
    res.json(properties)
}

exports.getSingleProperty = async (req, res) => {
    const propertyId = req.params.id

    await PropertiesModel.findById({_id:propertyId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json(data)
        }
    })
}
exports.getSingleCity = async (req, res) => {
    const propertyId = req.params.name

    await PropertiesModel.find({cityName:propertyId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json(data)
        }
    })
}

exports.createProperty = async (req, res) => {

    let filesArray = []
    await req.files.forEach(element => {
        const file = {
            fileName: element.originalname,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
        }
    filesArray.push(file)
    })


    const newProperty = await new PropertiesModel({
        cityId: req.body.cityId,
        user:req.body.user,
        keyFeatures:req.body.keyFeatures,
        address:req.body.address,
        home_description:req.body.home_description,
        bedroom:req.body.bedroom,
        deposit:req.body.deposit,
        availability:req.body.availability,
        bathroom:req.body.bathroom,
        type:req.body.type,
        images:filesArray,
        rent:req.body.rent,
        cityName:req.body.cityName
    })
   

    newProperty.save((err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property created', data})
        }
    })
}

exports.updateProperty = async (req, res) => {
    const propertyId = req.params.id
    let filesArray = []
   await req.files.forEach(element => {
        const file = {
            fileName: element.originalname,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
        }
    filesArray.push(file)
    })


    const newProperty =  {
        cityId: req.body.cityId,
        user:req.body.user,
        keyFeatures:req.body.keyFeatures,
        address:req.body.address,
        home_description:req.body.home_description,
        bedroom:req.body.bedroom,
        deposit:req.body.deposit,
        availability:req.body.availability,
        bathroom:req.body.bathroom,
        type:req.body.type,
        images:filesArray,
        rent:req.body.rent,
        cityName:req.body.cityName
    }

    const newProperty1 =  {
        cityId: req.body.cityId,
        user:req.body.user,
        keyFeatures:req.body.keyFeatures,
        address:req.body.address,
        home_description:req.body.home_description,
        bedroom:req.body.bedroom,
        deposit:req.body.deposit,
        availability:req.body.availability,
        bathroom:req.body.bathroom,
        type:req.body.type,
        rent:req.body.rent,
        cityName:req.body.cityName
    }

    const data = filesArray.length !== 0 ? newProperty : newProperty1

    await PropertiesModel.findByIdAndUpdate({_id: propertyId}, data, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property updated', data})
        }
    })
}

exports.deleteProperty = async (req, res) => {
    const propertyId = req.params.id

    await PropertiesModel.deleteOne({_id:propertyId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Property deleted', data})
        }
    })
}