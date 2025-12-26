const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("./minio");

async function uploadToMinio(file, id) {
  const params = {
    Bucket: process.env.MINIO_BUCKET,
    Key: id,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await s3.send(new PutObjectCommand(params));
  
  return `/${process.env.MINIO_BUCKET}/${id}`;
}

module.exports = uploadToMinio;