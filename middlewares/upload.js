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
