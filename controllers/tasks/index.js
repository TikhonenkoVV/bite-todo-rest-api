const { ctrlerWrapper } = require("../../helpers");

const addTask = require("./addTask");
const updateTask = require("./updateTask");
const deleteTask = require("./deleteTask");

module.exports = {
    addTask: ctrlerWrapper(addTask),
    updateTask: ctrlerWrapper(updateTask),
    deleteTask: ctrlerWrapper(deleteTask),
};
