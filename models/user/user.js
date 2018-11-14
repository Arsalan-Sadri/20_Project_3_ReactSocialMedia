const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name is required!"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    username: {
        type: String,
        trim: true,
        required: "Username is required",
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: "Email address is required",
        unique: true,
        match: [
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            "Please enter a valid e-mail address"
        ]
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input) {
                return input.length >= 8;
            },
            "Password should be at least 8 characters!"
        ]
    },
    picPath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
