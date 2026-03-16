const Message = require("../../domain/entities/Message")

exports.getMessage = async (req, res) => {
    try {

        const message = await Message.findOne()

        res.json(message)

    } catch (err) {

        res.status(500).json({ error: "Failed to fetch message" })

    }
}

exports.createMessage = async (req, res) => {
    try {

        const message = new Message(req.body)

        await message.save()

        res.json(message)

    } catch (err) {

        res.status(500).json({ error: "Failed to create message" })

    }
}