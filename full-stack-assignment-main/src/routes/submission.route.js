const express = require("express");
const {
    getSubmissionsOfProblem,
    addSubmissionToProblem,
} = require("../controllers/submission.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/:id", getSubmissionsOfProblem);
router.post("/:id", addSubmissionToProblem);

module.exports = router;