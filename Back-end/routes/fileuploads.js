const express = require('express');
const multer = require('multer');
const upload = multer({dest : 'uploads/'})
const router = express.Router();



module.exports = router;