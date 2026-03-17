const express = require("express")
const router = express.Router()
const rateLimit = require("express-rate-limit")

const visitController = require("../controllers/visitController")

const visitLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // max 20 requests per IP per minute
})


router.post("/", visitLimiter, visitController.createVisit)

module.exports = router

