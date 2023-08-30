const { Board, Task, Column } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;
  
  const columns = await Column.find({ owner: boardId });
  const columnsId = columns.map((column) => column._id);
  
  if (columnsId.length > 0) {
    columnsId.map(async (columnId) => {
      const columnIdString = columnId.toString();
      await Task.deleteMany({ owner: columnIdString });
    });    
    await Column.deleteMany({ owner: boardId });
  }

  const board = await Board.findByIdAndRemove(boardId);

  if (!board) {
    throw new HttpError(404, "Not found");
  }

  res.json({ status: "success", code: 200, message: "Board deleted", board });
};

module.exports = deleteBoard;
