const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    const result = await Task.findByIdAndRemove(taskId);

    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json({ status: "success", code: 200, message: "Task deleted" });
};

module.exports = deleteTask;
