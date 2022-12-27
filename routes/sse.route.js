const express = require("express");
const sse = require("../sse");
const sseLocation = require("../sse/location");

const router = express.Router();

router.get("/api/alert/v1/event", sse.init);
router.get("/api/location/v1/events", sseLocation.init);

module.exports = router;
