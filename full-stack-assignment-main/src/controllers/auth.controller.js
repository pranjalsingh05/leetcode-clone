const bcrypt = require('bcrypt');
const { USERS } = require("../database/data");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../lib/constants");

const signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = USERS.find((user) => user.email === email);

        if (existingUser) {
            const err = new Error("User with the given email already exists!");
            err.statusCode = 400;
            throw err;
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const id = USERS.length;
        const payload = { id, email };

        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        USERS.push({ id, email, password: hashPassword });

        const responseData = {
            id,
            email,
            token,
            message: "User created successfully",
        };

        res.status(200).json(responseData);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = USERS.find((user) => user.email === email);

        if (!existingUser) {
            const err = new Error("User with the given email does not exist!");
            err.statusCode = 400;
            throw err;
        }

        const isPasswordSame = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordSame) {
            const err = new Error("Password is incorrect!");
            err.statusCode = 401;
            throw err;
        }

        const payload = { id: existingUser.id, email: existingUser.email };
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        const responseData = {
            email,
            token,
            message: "Login successful",
        };

        res.status(200).json(responseData);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

module.exports = { signup, login };
