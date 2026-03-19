const Visit = require("../../domain/entities/VisitLog")

exports.createVisit = async (req, res) => {
    try {

        const lastVisit = await Visit.findOne({
            ip_address: req.ip,
            path: req.body.path
        }).sort({ createdAt: -1 })

        if (lastVisit) {
            const diff = Date.now() - new Date(lastVisit.createdAt).getTime()

            if (diff < 10000) {
                return res.json({ skipped: true })
            }
        }

        const visit = new Visit({
            path: req.body.path,
            user_agent: req.headers['user-agent'],
            ip_address: req.ip
        })

        await visit.save()

        res.json(visit)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Failed to create visit" })
    }
}