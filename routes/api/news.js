const router = require("express").Router();
const controller = require("../../controllers/controller");

router
  .route("/search/:title")
  .get(controller.search)

module.exports = router;
