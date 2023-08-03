const { Schema, model } = require("mongoose");
const Joi = require("joi");

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

const taskJoiSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.date(),
  priority: Joi.string().valid("without", "low", "high", "medium"),
  owner: Joi.string(),
});

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
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",
    //   required: "true",
    // },
  },
  { versionKey: false, timestamps: true }
);

const boardJoiSchema = Joi.object({
  title: Joi.string().min(2).max(32).required(),
  background: Joi.string().min(0),
  dashboardIcon: Joi.string().min(0),
});

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
  { versionKey: false, timestamps: true }
);

const columnJoiSchema = Joi.object({
  title: Joi.string().min(2).max(32).required(),
});

const scheme = {
  taskJoiSchema,
  boardJoiSchema,
  columnJoiSchema,
};

const Task = model("task", taskSchema);
const Board = model("board", boardSchema);
const Column = model("column", columnSchema);

module.exports = { scheme, Task, Board, Column };
