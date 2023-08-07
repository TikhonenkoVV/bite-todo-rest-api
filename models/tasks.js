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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "column",
      required: "true",
    },
  },
  { versionKey: false, timestamps: true }
);

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

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "board",
      required: "true",
    },
  },
  { versionKey: false,
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

columnSchema.virtual('cards', {
  ref: 'task',
  localField: '_id',
  foreignField: 'owner',
});

const Task = model("task", taskSchema);
const Board = model("board", boardSchema);
const Column = model("column", columnSchema);

module.exports = { Task, Board, Column };
