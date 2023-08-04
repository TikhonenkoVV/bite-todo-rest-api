const { Column } = require("../../models/tasks");

const getColumns = async (req, res) => {
  const { boardId: owner } = req.params;

  const columns = await Column.find({ owner }, "-createdAt -updatedAt");

  res.json({
    status: "success",
    code: 200,
    message: "Columns successfully received",
    columns,
  });
};

module.exports = getColumns;
