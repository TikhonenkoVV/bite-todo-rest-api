const { Column, Task } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;

  const cardsCount = await Task.countDocuments({ owner: columnId });

  if (cardsCount) {
    await Task.deleteMany({ owner: columnId });
  }

  const column = await Column.findByIdAndRemove(columnId);

  if (!column) {
    throw HttpError(404, "Not found");
  }

  res.json({ status: "success", code: 200, message: "Column deleted", column });
};

module.exports = deleteColumn;
