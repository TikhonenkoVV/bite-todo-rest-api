const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const updateBoard = async (req, res) => {
    const { _id: owner } = req.user;
    const { boardId } = req.params;
    const { title } = req.body;

    const result = await Board.find({ owner, title });

    const isDuplicatedTitle = result.filter(
        (el) => el._id.toString() !== boardId
    ).length;

    if (isDuplicatedTitle) {
        throw HttpError(409, "This board name already exists in this user");
    }

    const board = await Board.findByIdAndUpdate(boardId, req.body, {
        new: true,
        select: "-owner -createdAt -updatedAt",
    });
    if (!board) {
        throw HttpError(404, "Not found");
    }

    res.json({
        status: "create",
        code: 201,
        message: "Board updated successfully",
        board,
    });
};

module.exports = updateBoard;
