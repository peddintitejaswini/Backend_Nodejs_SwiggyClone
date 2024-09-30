const express = require("express");
const firmControllers = require("../controllers/firmcontroller");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/add-Firm", verifyToken, firmControllers.addFirm);

router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.headersSent("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "..", "uploads", imageName));
});
router.delete("/:firmId", firmControllers.deleteFirmById);

module.exports = router;
