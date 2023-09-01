const { Schema, model } = require("mongoose");

const boardSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            default: "",
        },
        dashboardIcon: {
            type: String,
            default: "",
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: "true",
        },
    },
    { versionKey: false, timestamps: true }
);

const Board = model("board", boardSchema);

module.exports = Board;
