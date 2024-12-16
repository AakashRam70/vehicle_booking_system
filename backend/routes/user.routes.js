const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body("fullname").isLength({ min: 3 }).withMessage("Fullname must be at least 3 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
],
    UserController.registerUser
);


module.exports = router;