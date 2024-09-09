const express = require("express");
const router = express.Router();
const ScoreController = require("../controllers/ScoreController");

// Add a new score
router.post("/add", ScoreController.addScore);

// Get scores
router.get("/", ScoreController.getScores);

module.exports = router;
