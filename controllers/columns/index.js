const { ctrlerWrapper } = require("../../helpers");
const addColumn = require("./addColumn");
const getColumns = require("./getColumns");
const updateColumn = require("./updateColumn");
const deleteColumn = require("./deleteColumn");

module.exports = {
    addColumn: ctrlerWrapper(addColumn),
    getColumns: ctrlerWrapper(getColumns),
    updateColumn: ctrlerWrapper(updateColumn),
    deleteColumn: ctrlerWrapper(deleteColumn),
};
