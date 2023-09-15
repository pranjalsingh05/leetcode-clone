const { SUBMISSION } = require("../database/data");

const getSubmissionsOfProblem = async (req, res) => {
    // return the users submissions for this problem
    const problemId = Number.parseInt(req.params.id);
    const submissions = SUBMISSION.filter(
        (submission) =>
            submission.problemId === problemId &&
            submission.submittedBy === req.user.id
    ).sort((a, b) => b.submittedAt - a.submittedAt);
    res.status(200).json({
        data: submissions,
        message: "Submission fetched successfully",
    });

};


const addSubmissionToProblem = async (req, res, next) => {
  try {
    // let the user submit a problem, randomly accept or reject the solution
    // Store the submission in the SUBMISSION array above
    const problemId = Number.parseInt(req.params.id);
    const { code, language } = req.body;
    if (!code) {
      const err = new Error("No code provided");
      err.statusCode = 400;
      throw err;
    }

    const submission = {
      id: SUBMISSION.length,
      problemId,
      code,
      status: "pending",
      language,
      submittedBy: req.user.id,
      submittedAt: new Date(),
    };
    SUBMISSION.push(submission);
    
      res.status(200).json({
          data: submissions,
          message: "Submission fetched successfully",
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSubmissionsOfProblem, addSubmissionToProblem };