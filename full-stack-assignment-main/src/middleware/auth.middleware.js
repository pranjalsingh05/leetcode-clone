const jwt = require("jsonwebtoken");
const { secretKey } = require("../lib/constants");
const { USERS } = require("../database/data");

const authMiddleware = (req, res, next) => {
    try {
        // Get the token from the request headers, query parameter, or request body
        const token = req.headers.authorization;

        // Check if token exists
        if (!token) {
            const err = new Error("Authentication token not provided");
            err.statusCode = 401;
            throw err;
        }

        // Verify the token
        const decodedToken = jwt.verify(token, secretKey);
        // Attach the decoded token to the request object for further use
        req.user = decodedToken;
        const userExist = USERS.find((user) => user.email === decodedToken.email);
        if (!userExist) {
            const err = new Error("User not found");
            err.statusCode = 404;
            throw err;
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authMiddleware;
