const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    location: String,
    image: String,

    email:String,
    status: {
        type: String,
        default: "Pending"
    },
    feedback: {
        type: String,
        default: ""
    }
},{timestamps:true});

module.exports = mongoose.model("Complaint", complaintSchema);