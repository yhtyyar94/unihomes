const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {isEmail} = require('validator')

const UserSchema = new Schema({
    email: {
        type: String,
        require: [true, 'Please enter an email'],
        unique: [true, 'This email is exist. Please enter new email or try to login.'],
        lowercase:true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        require:[true, 'Please enter a password'],
        minLength:[6, 'Minimum password length is 6 characters.']
    },
    name:{
        type: String,
        require: [true, 'Please enter your name']
    },
    contactNumber:{
        type: Number,
        require: [true, 'Please enter your phone number']
    },
    company:{
        type: String
   },
   city:{
    type: String,
    require: [true, 'Please choose a city ']
   }

})

module.exports = mongoose.model('user', UserSchema)