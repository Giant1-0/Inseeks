const mongoose = require('mongoose')
const AnswerSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignUp'
      },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    body: String
  });
  module.exports = mongoose.model('Answer', AnswerSchema);
