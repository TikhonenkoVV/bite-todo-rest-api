const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
    {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        priority: {
            type: String,
            enum: ["without", "low", "high", "medium"],
            default: "without",
        },
        deadline: {
            type: Date,
            default: Date.now,
            require: true,
        },
        index: {
            type: Number,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "column",
            required: "true",
        },
    },
    { versionKey: false, timestamps: true }
);

const Task = model("task", taskSchema);

module.exports = Task;
