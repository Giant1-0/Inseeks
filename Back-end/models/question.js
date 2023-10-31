  const mongoose = require('mongoose')
  const QuestionSchema = new mongoose.Schema({
      RequestBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
      interests: [],
      title: String,
      body: String,
      // image: {
      //   data: Buffer,  // Store the image data as a buffer
      //   contentType: String, // Set the content type, e.g., 'image/jpeg'
      // }
      image: String
    });
    
    module.exports = mongoose.model('Question', QuestionSchema);