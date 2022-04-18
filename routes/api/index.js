const router = require("express").Router();
const userRoutes = require("./userRoutes");
const strategyRoutes = require("./strategyRoutes");

router.use("/user", userRoutes);
router.use("/strategy", strategyRoutes);

module.exports = router;
