const { ctrlerWrapper } = require("../../helpers");

const addBoard = require("./addBoard");
const updateBoard = require("./updateBoard");
const getAllBoards = require("./getAllBoards");
const deleteBoard = require("./deleteBoard");

module.exports = {
    addBoard: ctrlerWrapper(addBoard),
    updateBoard: ctrlerWrapper(updateBoard),
    getAllBoards: ctrlerWrapper(getAllBoards),
    deleteBoard: ctrlerWrapper(deleteBoard),
};
