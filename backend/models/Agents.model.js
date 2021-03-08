const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {isEmail} = require('validator')

const UserSchema = new Schema({
    email: {
        type: String,
        require: [true, 'Please enter an email'],
        unique: [true, 'This email is exist. Please enter new email or try to login.'],
        lovercase:true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        require:[true, 'Please enter a password'],
        minLength:[6, 'Minimum password length is 6 characters.']
    }
})

module.exports = mongoose.model('user,', UserSchema)