const { ctrlerWrapper } = require("../../helpers");

const addBoard = require("./addBoard");

module.exports = {
  addBoard: ctrlerWrapper(addBoard),
};
