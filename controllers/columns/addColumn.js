const { Column } = require("../../models");

const addColumn = async (req, res) => {
    const { _id, title, index, owner } = await Column.create({
        ...req.body,
    });

    console.log(req.body);

    res.json({
        status: "create",
        code: 201,
        message: "Column created successfully",
        column: {
            _id,
            title,
            index,
            cards: [],
            owner,
        },
    });
};

module.exports = addColumn;
