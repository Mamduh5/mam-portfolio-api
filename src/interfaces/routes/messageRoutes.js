const express = require("express")
const router = express.Router()

const messageController = require("../controllers/messageController")

router.get("/", messageController.getMessage)

router.post("/", messageController.createMessage)

module.exports = router

