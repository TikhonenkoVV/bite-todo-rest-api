const { ctrlerWrapper } = require("../../helpers");

const addBoard = require("./addBoard");
const addColumn = require("./addColumn");
const addTask = require("./addTask")

module.exports = {
  addBoard: ctrlerWrapper(addBoard),
    addColumn: ctrlerWrapper(addColumn),
  addTask:  ctrlerWrapper(addTask),
};
