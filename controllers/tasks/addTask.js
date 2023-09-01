const { Task } = require("../../models");

const addTask = async (req, res) => {
    const { title, description, priority, deadline, index, owner, _id } =
        await Task.create({ ...req.body });

    res.json({
        status: "create",
        code: 201,
        message: "Task created successfully",
        task: {
            title,
            description,
            priority,
            deadline,
            index,
            owner,
            _id,
        },
    });
};

module.exports = addTask;
