const { Board } = require("../../schemas/tasks");
const { HttpError } = require("../../helpers");

const addBoard = async (req, res) => {
  //   const { _id: owner } = req.user;

  //   const result = await Board.findOne({ owner, title: req.body.title });
  const result = await Board.findOne({ title: req.body.title });

  if (result) {
    throw HttpError(409, "this board name already exists");
  }

  //   const { _id, title, background, dashboardIcon } = await Board.create({
  const { title, background, dashboardIcon } = await Board.create({
    ...req.body,
    // owner,
  });

  res.json({
    status: "create",
    code: 201,
    message: "Board created successfully",
    board: {
      //   _id,
      title,
      background,
      dashboardIcon,
    },
  });
};

module.exports = addBoard;
