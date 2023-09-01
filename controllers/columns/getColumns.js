const { Column } = require("../../models");

const getColumns = async (req, res) => {
    const { owner } = req.params;

    const columns = await Column.find({ owner }, "-updatedAt")
        .populate({ path: "cards", options: { sort: "index" } })
        .sort("index");

    res.json({
        status: "success",
        code: 200,
        message: "Columns successfully received",
        columns,
    });
};

module.exports = getColumns;
