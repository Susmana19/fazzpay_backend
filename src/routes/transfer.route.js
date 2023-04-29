
const express = require("express");
const router = express();

//import controller internal
const transferController = require("../controllers/transfer.controller");

// const formUpload = require('../../helper/formUpload')

//route recruiters
router.post("/", transferController.addTransfer);
router.get("/sender/:id", transferController.getSender);
router.get("/receiver/:id", transferController.getReceiver);

//export
module.exports = router;