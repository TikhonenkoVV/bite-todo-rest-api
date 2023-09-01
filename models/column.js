const { Schema, model } = require("mongoose");

const columnSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "board",
            required: "true",
        },
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        id: false,
    }
);

columnSchema.virtual("cards", {
    ref: "task",
    localField: "_id",
    foreignField: "owner",
});

const Column = model("column", columnSchema);

module.exports = Column;
