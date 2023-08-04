const { Task } = require("../../models/tasks");

const addTask = async (req, res) => {
  const { columnId: owner } = req.params;

  const {
    title,
    description,
    priority,
    deadline,
    owner: taskOwner,
    _id,
  } = await Task.create({ ...req.body, owner });

  res.json({
    status: "create",
    code: 201,
    message: "Task created successfully",
    task: {
      title,
      description,
      priority,
      deadline,
      owner: taskOwner,
      _id,
    },
  });
};

module.exports = addTask;
