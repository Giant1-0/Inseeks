const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    name: String,
    email: Number,
    suggestion: String,
    Message: String
})

module.exports = mongoose.model("Chat", chatSchema)