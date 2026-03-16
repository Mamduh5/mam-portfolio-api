const minioClient = require("../../infrastructure/storage/minio")

const uploadImage = async (req, res) => {

  if (!req.file) {
    return res.status(400).json({ error: "no file uploaded" })
  }

  const file = req.file

  const fileName = Date.now() + "-" + file.originalname

  await minioClient.putObject(
    process.env.MINIO_BUCKET,
    fileName,
    file.buffer,
    file.size
  )

  const url = `${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}/${process.env.MINIO_BUCKET}/${fileName}`

  res.json({
    url: url
  })
}

module.exports = {
  uploadImage
}