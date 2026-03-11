const mongoose = require("mongoose")

const VisitLogSchema = new mongoose.Schema({

  path: {
    type: String,
    index: true
  },

  ip: {
    type: String
  },

  user_agent: {
    type: String
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("VisitLog", VisitLogSchema)