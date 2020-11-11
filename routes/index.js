const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello api!" });
});

router.use("/healthcheck", (req, res) => {
  res.json({ message: "ok" });
});

module.exports = router;