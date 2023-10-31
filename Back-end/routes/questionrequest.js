const express = require('express');
const router = express.Router();
const path = require('path');

const Questions = require('../models/question')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Define the destination directory where files will be saved
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name as the saved file name
    },
  });
  
  const upload = multer({ storage: storage });


router.post('/post/questionrequest', upload.single('image'), async (req, res) => {
    const {title, body} = req.body;
    const image = req.file;
    console.log("Image",image);
    const question = new Questions({
        title: title,
        body: body,
        image: {
            data: path.join(__dirname+`uploads/${image.originalname}`),
            contentType: image.mimetype, // Set the content type
        }
  
    })
    question.save();

})

router.get('/questions', async (req, res) => {
    try {
        Questions.deleteMany({});
        const questions = await Questions.find({});
        console.log(questions)
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching questions' });
    }
});

module.exports = router;