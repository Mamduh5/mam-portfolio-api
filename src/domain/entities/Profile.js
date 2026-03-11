const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true //trim space
  },

  title: {
    type: String,
    trim: true //trim space
  },

  introduction: {
    type: String,
    trim: true //trim space
  },

  email: {
    type: String,
    trim: true //trim space
  },

  phone: {
    type: String,
    trim: true //trim space
  },

  line: {
    type: String,
    trim: true //trim space
  },

  facebook: {
    type: String,
    trim: true //trim space
  },

  github: {
    type: String,
    trim: true //trim space
  },

  avatar_url: {
    type: String,
    trim: true //trim space
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("Profile", ProfileSchema)