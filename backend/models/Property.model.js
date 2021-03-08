const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PropertiesSchema = new Schema({
    name: {type:String, required:true},
    numberOfProperty: {type:Number},
    city: {type:mongoose.Types.ObjectId},
    user:{type:mongoose.Types.ObjectId},
    keyFeatures:{type:Array},
    location:{type:String},
    description:{type:String},
    bedrooms:{type:Array},
    deposit:{type:Number},
    availability:{type:Array},
    billsIncluded:{type:Array},
    bathrooms:{type:Number},
    type:{type:String},
    liked:{type:Boolean},
    images:{type:Array},
    price:{type:Number},
    addedAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('property', PropertiesSchema)