const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String
    },

    project_type: {
        type: String,
        enum: ["app", "game", "service", "experiment"],
        default: "app",
        index: true
    },

    repo_url: {
        type: String
    },

    demo_url: {
        type: String
    },

    preview_image: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
    tech_stack: [
        {
            type: String
        }
    ],

}, {
    timestamps: true
})

module.exports = mongoose.model("Project", ProjectSchema)