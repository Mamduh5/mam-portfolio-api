const Profile = require("../../domain/entities/Profile")

exports.getProfile = async (req, res) => {
  try {

    const profile = await Profile.findOne()

    res.json(profile)

  } catch (err) {

    res.status(500).json({ error: "Failed to fetch profile" })

  }
}

exports.updateProfile = async (req, res) => {
  try {

    const profile = await Profile.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
        upsert: true
      }
    )

    res.json(profile)

  } catch (err) {

    res.status(500).json({ error: "Failed to update profile" })

  }
}