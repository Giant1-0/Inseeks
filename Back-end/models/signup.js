const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    fullname : String,
    email: String,
    pass: String,
    username: String
})

module.exports = mongoose.model("SignUp",signUpSchema)