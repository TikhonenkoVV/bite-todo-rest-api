const { User } = require("../../models/user");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const updateFields = {};

  if (req.body.name) updateFields.name = req.body.name;
  if (req.body.email) updateFields.email = req.body.email;
  if (req.body.password) updateFields.password = req.body.password;

  const result = await User.findByIdAndUpdate(
    _id,
    { $set: updateFields },
    { new: true }
  );

  res.json(result);
};

module.exports = updateUser;
