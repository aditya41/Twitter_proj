const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true

    },
    name: {
        required: true,
        type: String,
        trim: true
    },
    password: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: String,
        unique: true,
        trim: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User