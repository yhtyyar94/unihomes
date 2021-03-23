const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitiesSchema = new Schema({
    name: {type:String, required:true, unique:true},
    city_description: {type:String},
    url:{type:String}
},{timestamps:true})

module.exports = mongoose.model('city', CitiesSchema)