const { Board } = require("../../models");

const getAllBoards = async (req, res) => {
    const { _id: owner } = req.user;

    const result = await Board.find({ owner }, "-createdAt -updatedAt -owner");

    res.json({
        status: "success",
        code: 200,
        message: "Boards successfully received",
        boards: result,
    });
};

module.exports = getAllBoards;
