const express = require('express');
const cors = require("cors");

const app = express();

const authRouter = require('./src/routes/auth.route');
const submissionRouter = require("./src/routes/submission.route");
const questionRouter = require("./src/routes/question.route");


const authMiddleware = require('./src/middleware/auth.middleware');

app.use(express.json());
app.use(cors());

// Use your middleware globally, or for specific routes as needed


const port = 3001;


app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});


app.use("/", authRouter);






app.use("/submissions", submissionRouter);
app.use("/questions", questionRouter);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})