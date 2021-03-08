const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitiesSchema = new Schema({
    name: {type:String, required:true, unique:true},
    // numberOfProperty: {type:Number},
    image:{type:String}
})

module.exports = mongoose.model('city', CitiesSchema)