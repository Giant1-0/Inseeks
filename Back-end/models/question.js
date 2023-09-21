const mongoose = require('mongoose')
const QuestionSchema = new mongoose.Schema({
    RequestBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    interests: [],
    title: String,
    body: String,
  });
  
  module.exports = mongoose.model('Question', QuestionSchema);