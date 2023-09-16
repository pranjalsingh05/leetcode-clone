const { QUESTIONS } = require("../database/data");

const getQuestionsList = async (_req, res) => {
    //return the user all the questions in the QUESTIONS array
   
    res.status(200).json({
        data: QUESTIONS,
        message: "Question fetched successfully",
    });
};

const getQuestion = async(req, res, next) => {
    try {
        // Create a route that lets a user get a specific problem
        const { id } = req.params;
        console.log("Received id:", id); 
        if (NaN(id)) console.log("true");     
        const question = QUESTIONS.find((question) => question.id === quesId);

        if (!question) {
            const err = new Error("Question not found");
            err.statusCode = 404;
            throw err;
        }
         res.status(200).json({
             data: question,
            message: "Question fetched successfully",
        });

       
    } catch (error) {
        next(error);
    }
};
module.exports={
    getQuestion,
    getQuestionsList
}