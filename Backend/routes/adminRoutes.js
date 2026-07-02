const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (
        email === "admin@gmail.com" &&
        password === "admin123"
    ) {
        res.json({
            success: true,
            message: "Admin Login Successful"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid Admin Credentials"
        });
    }

});
module.exports = router;


