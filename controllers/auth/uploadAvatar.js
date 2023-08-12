const { User } = require("../../models/user");
const { HttpError, uploadCloud } = require("../../helpers");
// const cloudinary = require("cloudinary").v2;

const uploadAvatar = async (req, res) => {
  console.log("file", req.file);
  if (!req.file) {
    throw HttpError(400, "File is requred");
  }

  //   const { filename } = req.file;
  //   const { _id } = req.user;

  //   const split = filename.split(".");
  //   const fileExt = split[split.length - 1];
  //   const fileName = `${_id}.${fileExt}`;
  if (req.file) {
    updatedUser.avatarURL = await uploadCloud(req);
  }

  //   await createAvatar(filename, fileName);

  //   const avatarURL = `avatars/${fileName}`;
  //   const user = await User.findByIdAndUpdate(
  //     _id,
  //     {
  //       avatarURL,
  //     },
  //     { new: true }
  //   );

  //   return res.json({
  //     avatarURL: user.avatarURL,
  //   });
  const result = await User.findByIdAndUpdate(_id, updatedUser, {
    new: true,
    select: "name email theme avatarURL -_id",
  });
  res.json(result);
};

module.exports = uploadAvatar;
