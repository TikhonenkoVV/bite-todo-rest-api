const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirPath = path.resolve(__dirname, "../tmp");
    cb(null, dirPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;

// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");

// const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } =
//   process.env;

// cloudinary.config({
//   cloud_name: CLOUDINARY_CLOUD_NAME,
//   api_key: CLOUDINARY_API_KEY,
//   api_secret: CLOUDINARY_SECRET_KEY,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "avatars",
//   allowedFormats: ["jpg", "png"],
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const uploadCloud = multer({ storage });

// module.exports = uploadCloud;
