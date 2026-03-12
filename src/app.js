const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const projectRoutes = require("./interfaces/routes/projectRoutes")
const profileRoutes = require("./interfaces/routes/profileRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/projects", projectRoutes)
app.use("/profile", profileRoutes)
module.exports = app