const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const updateTask = async (req, res) => {
    const { taskId } = req.params;

    const task = await Task.findByIdAndUpdate(taskId, req.body, {
        new: true,
        select: "-createdAt -updatedAt",
    });

    if (!task) {
        throw HttpError(404, "Not found");
    }

    res.json({
        status: "success",
        code: 200,
        message: "Task updated successfully",
        task,
    });
};

module.exports = updateTask;
