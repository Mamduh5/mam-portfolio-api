const Project = require("../../domain/entities/Project")

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find()

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