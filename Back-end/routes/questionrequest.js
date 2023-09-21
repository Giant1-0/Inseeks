const express = require('express')
const router = express.Router();

const Questions = require('../models/question')

router.post('/post/questionrequest', async (req, res) => {
    const {title, body} = req.body;
    const question = new Questions({
        title: title,
        body: body
    })
    question.save();

})

router.get('/questions', async (req, res) => {
    try {
        const questions = await Questions.find({});
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching questions' });
    }
});

module.exports = router;