const express = require("express");
const authRoutes = require("./auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "HomeRoute" });
});
router.use("/auth", authRoutes);

module.exports = router;
