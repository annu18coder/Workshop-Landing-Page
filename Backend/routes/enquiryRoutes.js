const express = require("express");
const router = express.Router();

const submitEnquiry = require("../controller/enquiryController");

router.post("/enquiry", submitEnquiry);

module.exports = router;