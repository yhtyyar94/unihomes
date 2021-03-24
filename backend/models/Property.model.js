const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PropertiesSchema = new Schema({
    city: {type:mongoose.Types.ObjectId},
    user:{type:mongoose.Types.ObjectId},
    keyFeatures:{type:Array},
    address:{type:Object},
    home_description:{type:String},
    bedroom:{type:Number},
    deposit:{type:Number},
    availability:{type:Object},
    bathroom:{type:Number},
    type:{type:String},
    images:[Object],
    rent:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('property', PropertiesSchema)