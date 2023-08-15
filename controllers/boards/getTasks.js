const { Task } = require("../../models/tasks");

const getTasks = async (req, res) => {
    const { columnId: owner } = req.params;

    const tasks = await Task.find({ owner }, "-createdAt -updatedAt");

    res.json({
        status: "success",
        code: 200,
        message: "Tasks successfully received",
        tasks: tasks.sort("index"),
    });
};

module.exports = getTasks;
