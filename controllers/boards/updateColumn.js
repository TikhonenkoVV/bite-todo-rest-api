const { Column } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const updateColumn = async (req, res) => {
  const { columnId } = req.params;

  const column = await Column.findByIdAndUpdate(columnId, req.body, {
    new: true,
    select: "-updatedAt",
  });

  if (!column) {
    throw HttpError(404, "Not found");
  }

  res.json({
    status: "create",
    code: 200,
    message: "Column updated successfully",
    column,
  });
};

module.exports = updateColumn;
