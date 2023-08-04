const { ctrlerWrapper } = require("../../helpers");
const {User} = require("../../models/user");

const updateUser = async (req, res) => {
  const _id = req.user;
    
    const { name, email, password } = req.body;
    const result = await User.findByIdAndUpdate(
        _id,
        { name, email, password },
        { new: true }
    );

  res.json(result);
};

module.exports = ctrlerWrapper(updateUser);