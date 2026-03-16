const Visit = require("../../domain/entities/VisitLog")

exports.createVisit = async (req, res) => {
  try {

    const visit = await Visit.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
        upsert: true
      }
    )

    res.json(visit)

  } catch (err) {

    res.status(500).json({ error: "Failed to create visit" })

  }
}
