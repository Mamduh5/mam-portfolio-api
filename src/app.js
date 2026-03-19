const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const projectRoutes = require("./interfaces/routes/projectRoutes")
const profileRoutes = require("./interfaces/routes/profileRoutes")
const messageRoutes = require("./interfaces/routes/messageRoutes")
const uploadRoutes = require("./interfaces/routes/uploadRoutes")
const visitRoutes = require("./interfaces/routes/visitRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/projects", projectRoutes)
app.use("/profile", profileRoutes)
app.use("/messages", messageRoutes)
app.use("/upload", uploadRoutes)
app.use("/visit", visitRoutes)
app.set('trust proxy', 1)

module.exports = app