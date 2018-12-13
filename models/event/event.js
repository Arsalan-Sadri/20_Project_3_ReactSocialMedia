const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required!"
    },
    category: {
        type: String,
        trim: true,
        enum: [
            "Meetup",
            "Tutoring",
            "Sports",
            "Boot camp",
            "Fundraising",
            "Summit",
            "Conference",
            "Rally",
            "Music",
            "Wine tasting",
            "Culinary arts"
        ],
        required: "Category is required!"
    },
    capacity: {
        type: Number,
        min: 2,
        max: 100,
        trim: true,
        required: "Capacity is required!"
    },
    isTicketFree: {
        type: String,
        trim: true,
        required: "Is ticket free is required!"
    },
    ticketTier: {
        type: String,
        trim: true,
        required: "Type of ticket is required!"
    },
    cost: {
        type: Number,
        min: 1,
        max: 1000,
        trim: true,
        required: "Cost of ticket is required!"
    },
    startDate: {
        type: Date,
        trim: true,
        required: "Start date is required!"
    },
    startTime: {
        type: String,
        trim: true,
        required: "Start time is required!"
    },
    endDate: {
        type: Date,
        trim: true,
        required: "End date is required!"
    },
    endTime: {
        type: String,
        trim: true,
        required: "End time is required!"
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
