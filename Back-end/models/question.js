  const mongoose = require('mongoose')
  const QuestionSchema = new mongoose.Schema({
      RequestBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'SignUp'
        },
      interests: [],
      title: String,
      body: String,
      image: String,
      answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
      }],
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignUp'
      }]
    },     
    {timestamps: true}
    );
    
    module.exports = mongoose.model('Question', QuestionSchema);