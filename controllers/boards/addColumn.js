const { Column } = require("../../models/tasks");

const addColumn = async (req, res) => {
  const { boardId: owner } = req.params;

  const {
    _id,
    title,
    owner: columnOwner,
  } = await Column.create({ ...req.body, owner });

  res.json({
    status: "create",
    code: 201,
    message: "Column created successfully",
    column: {
      _id,
      title,
      owner: columnOwner,
    },
  });
};

module.exports = addColumn;
