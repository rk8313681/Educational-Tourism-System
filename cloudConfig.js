const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wonderlust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

const proofStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wonderlust_DEV/college_proofs",
    resource_type: "auto",
    allowedFormats: ["png", "jpg", "jpeg", "pdf"],
  },
});

const studentProofStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wonderlust_DEV/student_ids",
    resource_type: "auto",
    allowedFormats: ["png", "jpg", "jpeg", "pdf"],
  },
});

module.exports = {
  cloudinary,
  storage,
  proofStorage,
  studentProofStorage,
};