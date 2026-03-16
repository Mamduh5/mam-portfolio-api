const Visit = require("../../domain/entities/VisitLog")

exports.createVisit = async (req, res) => {
    try {

        const visit = new Visit(req.body)

        visit.user_agent = req.headers['user-agent']
        visit.ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress

        await visit.save()

        res.json(visit)

    } catch (err) {

        res.status(500).json({ error: "Failed to create visit" })

    }
}
