const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {isEmail} = require('validator')

const UserSchema = new Schema({
    firstName: {
        type: String,
        lowercase:true
   },   
     lastName: {
        type: String,
        lowercase:true
        
    },
    company: {
        type: String,
        require: [true, 'Please enter a company name...'],
        lowercase:true,
     
    },
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
   

   city:{
    type: String
   }

}, {timestamps:true})

module.exports = mongoose.model('user', UserSchema)