

const express = require("express");
const router = express.Router();
const multer = require("multer");
const Complaint = require("../models/complaint");

const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "uploads/");
},
filename: function (req, file, cb) {
cb(null, Date.now() + "-" + file.originalname);
}
});

const upload = multer({ storage: storage });

// Add Complaint
router.post("/add", upload.single("image"), async (req, res) => {


try {

    const complaint = new Complaint({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        email: req.body.email,
        image: req.file ? req.file.filename : "",
        status: "Pending"
    });

    await complaint.save();

    res.json({
        success: true,
        message: "Complaint Submitted Successfully"
    });

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: error.message
    });

}


});

// Get All Complaints
router.get("/all", async (req, res) => {


try {

    const complaints = await Complaint.find();

    res.json(complaints);

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}


});

// Update Status
router.put("/update/:id", async (req, res) => {


try {

    await Complaint.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status }
    );

    res.json({
        message: "Status Updated Successfully"
    });

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}


});

// Get Logged-in User Complaints
router.get("/user/:email", async (req, res) => {


try {

    const complaints = await Complaint.find({
        email: req.params.email
    });

    res.json(complaints);

} catch (error) {

    res.status(500).json({
        message: error.message
    });

}

});

//feedback
router.put("/feedback/:id", async (req, res) => {

    try {

        await Complaint.findByIdAndUpdate(
            req.params.id,
            {
                feedback: req.body.feedback
            }
        );

        res.json({
            success: true,
            message: "Feedback Submitted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

//feedback-community
router.get("/community", async (req, res) => {

    try {

        const complaints = await Complaint.find({
            status: "Resolved",
            feedback: { $ne: "" }
        });

        res.json(complaints);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
module.exports = router;
