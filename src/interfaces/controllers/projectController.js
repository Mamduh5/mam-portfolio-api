const Project = require("../../domain/entities/Project")

exports.getProjects = async (req, res) => {
  try {

    const filter = {}

    if (req.query.type) {
      filter.project_type = req.query.type
    }

    if (req.query.featured) {
      filter.featured = req.query.featured === "true"
    }

    const projects = await Project
      .find(filter)
      .sort({ createdAt: -1 })

    res.json(projects)

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" })
  }
}

exports.createProject = async (req, res) => {
  try {

    const project = new Project(req.body)

    await project.save()

    res.status(201).json(project)

  } catch (err) {

    res.status(500).json({
      error: "Failed to create project"
    })

  }
}


exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    
    if (!project) {
      return res.status(404).json({ error: "Project not found" })
    }

    res.json(project)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project" })
  }
}

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!project) {
      return res.status(404).json({ error: "Project not found" })
    }

    res.json(project)
  } catch (err) {
    res.status(500).json({ error: "Failed to update project" })
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({ error: "Project not found" })
    }

    res.json({ message: "Project deleted" })
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project" })
  }
}