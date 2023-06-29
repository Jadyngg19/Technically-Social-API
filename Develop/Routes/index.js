const router = require("express").Router();
const apiRoutes = require("./API");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("Gateway error");
});

module.exports = router;