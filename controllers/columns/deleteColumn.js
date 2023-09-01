const { Column, Task } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteColumn = async (req, res) => {
    const { columnId } = req.params;

    const cardsCount = await Task.countDocuments({ owner: columnId });

    if (cardsCount > 0) {
        throw HttpError(
            409,
            "It is impossible to remove column when exists one or more cards."
        );
    }

    const column = await Column.findByIdAndRemove(columnId);

    if (!column) {
        throw HttpError(404, "Not found");
    }

    res.json({
        status: "success",
        code: 200,
        message: "Column deleted",
        column,
    });
};

module.exports = deleteColumn;
