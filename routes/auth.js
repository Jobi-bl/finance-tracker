const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth"); // ✅ Corrected path

// Protected Route: Profile
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile!", user: req.user });
});

module.exports = router;
