const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/", (req, res) => {
  res.json({ msg: "hey this works" });
});

router.use("/api", apiRoutes);

module.exports = router;
