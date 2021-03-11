const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {isEmail} = require('validator')

const BookSchema = new Schema({
    user:{type:mongoose.Types.ObjectId, require:true},
    name:{type:String, require:true},
    email: {
        type: String,
        require: [true, 'Please enter an email'],
        unique: [true, 'This email is exist. Please enter new email or try to login.'],
        lovercase:true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    phone:{type:Number, require:true},
    message:{type:String, require:true},
    isRead:{type:Boolean, default:false},
    addedAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('book', BookSchema)