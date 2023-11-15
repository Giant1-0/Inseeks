const express = require('express');
const router = express.Router();
const path = require('path');

const Questions = require('../models/question')
const Answers = require('../models/answer')

const slugify = require('slugify');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads'); // Define the destination directory where files will be saved
    },
    filename: function (req, file, cb) {
      // cb(null, file.originalname); // Use the original file name as the saved file name
      const safeFilename = slugify(file.originalname, { lower: true });
      cb(null, safeFilename);
    },
  });
  
  const upload = multer({ storage: storage });


router.post('/post/questionrequest'
, upload.single('image')
, async (req, res) => {
    const {title, body, uid} = req.body;
    const image = req.file;
    console.log(uid);
    console.log("Image",image);
    try {
      const question = new Questions({
        RequestBy: uid,
        title: title,
        body: body,
        ...(image && { image: image.filename }),
      })
    res.status(200).json({sucess:'Hi'});
    question.save();
    } catch (error) {
      res.status(500).json({ error: 'Failed to save the question' });
    }
})


        // image: {
        //     data: path.join(__dirname+`./public/uploads/${image.originalname}`),
        //     contentType: image.mimetype, // Set the content type
        // }
router.get('/questions', async (req, res) => {
    try {
        // Questions.deleteMany({});
        const questions = await Questions.find({})
        .populate('RequestBy')
        .populate({
          path: "answers",
          // options: {limit: 1},
          populate: [
            {
              path: "User",
            }]
        })
        .populate('likes')

            // Calculate the like count for each question and add it to the question object
    const questionsWithLikeCount = questions.map((question) => ({
      ...question.toObject(),
      likesCount: question.likes.length // Calculate the like count
    }));

    res.status(200).json(questionsWithLikeCount);    
              
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching questions' });
    }
});

router.post('/post/like', async (req, res)=>{
  const {qid, uid, trueOrFalse} = req.body;
  try {
    const updateQuery = trueOrFalse
      ? { $pull: { likes: uid } } // Add user ID to likes if false
      : { $addToSet: { likes: uid } }; // Remove user ID from likes if true

    const updatedQuestion = await Questions.findOneAndUpdate(
      { _id: qid },
      updateQuery,
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const successMessage = trueOrFalse ? 'Successfully liked' : 'Successfully disliked';
    res.status(200).json({ success: successMessage });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post('/post/comment', async (req, res) => {
  const {body,uid,qid} = req.body;
  console.log(body,uid,qid)
  try{
  const answer = new Answers({
      User: uid,
      question: qid,
      body: body,
  })
  const newAnswer = await answer.save();
  const aid = newAnswer._id.toString();
  console.log(aid)
  // res.send(answer)
  // Find the question by its ID
  const question = await Questions.findOne({ _id: qid });
  if (question) {
    // Add the answer's _id to the question's answers array
    question.answers.push(aid);
    await question.save();
    res.status(200).json({ success: 'Answer saved successfully', answer: newAnswer });
  } else {
    res.status(404).json({ error: 'Question not found' });
  }
} catch (error) {
  res.status(500).json({ error: 'Failed to save the answer' });
}
});

router.get('/comments/:questionId', async (req, res) => {
  const questionId = await req.params.questionId;
  try {
  const answers = await Answers.find({ question: questionId })
  .populate('User');

  const comments = answers.map(answer => ({
    body: answer.body,
    qid: answer.question,
    user: answer.User.fullname
  }));
    
  res.status(200).json(comments);
  console.log(comments)
}
    catch(error) {
      console.error('Error fetching comments', error);
      res.status(500).json({ error: 'An error occurred while fetching comments' });
    };
});


router.get('/post/likeCount/:postId', async (req, res) => {
  const qid = await req.params.postId;
  try {
  const question = await Questions.findOne({ _id: qid })
  console.log('Likes count is', question.likes.length);
  const likeCount = question.likes.length;

  res.status(200).json(likeCount);
}
    catch(error) {
      console.error(error);
      res.status(500);
    };
});


module.exports = router;