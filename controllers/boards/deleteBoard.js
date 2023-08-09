const { Board } = require("../../models/tasks");
const { Column } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;

  const columnsCount = await Column.countDocuments({ owner: boardId });

  if (columnsCount > 0) {
    throw HttpError(409, "It is impossible to remove board when exists one or more columns.");
  }
  
  const board = await Board.findByIdAndRemove(boardId);

  if (!board) {
    throw HttpError(404, "Not found");
  }

  res.json({ status: "success", code: 200, message: "Board deleted", board });
};

module.exports = deleteBoard;
