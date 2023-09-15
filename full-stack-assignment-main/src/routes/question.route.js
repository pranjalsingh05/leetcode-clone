const express = require("express");
const {
    
    getQuestionsList,
    getQuestion,
} = require("../controllers/question.controller");
const authMiddleware = require("../middleware/auth.middleware");


const router = express.Router();

router.get("/", getQuestionsList);
router.get('/:id', getQuestion);

module.exports = router;