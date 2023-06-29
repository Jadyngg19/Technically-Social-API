const router = require("express").Router();
const userRoutes = require("./User");
const thoughtsRoutes = require("./Thoughts");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;