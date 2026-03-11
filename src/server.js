require("dotenv").config()

const app = require("./app")
const connectDB = require("./config/database")

connectDB()

const PORT = process.env.PORT || 4000
require("./domain/entities/Profile")
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})