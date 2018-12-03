const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Event's name is required!"
    },
    category: {
        type: String,
        trim: true,
        required: "Category is required!"
    },
    capacity: {
        type: Number,
        trim: true,
        required: "Capacity is required!"
    },
    date: {
        type: Date,
        trim: true,
        required: "Date is required!"
    },
    time: {
        type: Date,
        trim: true,
        required: "Time is required!"
    },
    street: {
        type: String,
        trim: true,
        required: "Street is required!"
    },
    city: {
        type: String,
        trim: true,
        required: "City is required!"
    },
    state: {
        type: String,
        trim: true,
        uppercase: true,
        required: "State is required!"
    },
    zipCode: {
        type: Number,
        trim: true,
        required: "City is required"
    },
    description: {
        type: String,
        trim: true,
        required: "State is required"
    },
    photoURL: {
        type: String
    }
});

module.exports = mongoose.model("Event", eventSchema);
