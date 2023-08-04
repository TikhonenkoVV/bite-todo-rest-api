const { Board } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;

  const board = await Board.findByIdAndRemove(boardId);

  if (!board) {
    throw HttpError(404, "Not found");
  }

  res.json({ status: "success", code: 200, message: "Board deleted", board });
};

module.exports = deleteBoard;
