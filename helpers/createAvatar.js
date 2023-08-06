const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

const createAvatar = async (file, newFile) => {
    const tmpFile = path.resolve(__dirname, "../tmp", file);
    const publicFile = path.resolve(__dirname, "../public/avatars", newFile);
    try {
        await fs.rename(tmpFile, publicFile);
    } catch (error) {
        await fs.unlink(tmpFile);
        throw error;
    }
    (await jimp.read(publicFile)).cover(68, 68).write(publicFile);
};

module.exports = createAvatar;
