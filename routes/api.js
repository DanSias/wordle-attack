const express = require("express");
const router = express.Router();

router.get("/words", (req, res, next) => {
  // get placeholder
});
router.get("/words/:date", (req, res, next) => {
  // get single word placeholder
});
router.post("/game", (req, res, next) => {
  // game placeholder
});
router.post("/guess", (req, res, next) => {
  // guess placeholder
});
router.delete("/todos/:id", (req, res, next) => {
  // delete placeholder
});
module.exports = router;
