const { ctrlerWrapper } = require("../../helpers");

const addBoard = require("./addBoard");
const addColumn = require("./addColumn");
const addTask = require("./addTask");
const updateTask = require("./updateTask");
const updateColumn = require("./updateColumn");

module.exports = {
  addBoard: ctrlerWrapper(addBoard),
  addColumn: ctrlerWrapper(addColumn),
  addTask: ctrlerWrapper(addTask),
  updateTask: ctrlerWrapper(updateTask),
  updateColumn: ctrlerWrapper(updateColumn),
};
