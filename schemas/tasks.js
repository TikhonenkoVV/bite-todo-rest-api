const Joi = require("joi");

const taskJoiSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date(),
    priority: Joi.string().valid("without", "low", "high", "medium"),
    index: Joi.number().required(),
    owner: Joi.string(),
});

const boardJoiSchema = Joi.object({
    title: Joi.string().min(2).max(32).required(),
    background: Joi.string().min(0),
    dashboardIcon: Joi.string().min(0),
});

const columnJoiSchema = Joi.object({
    title: Joi.string().min(2).max(32).required(),
    index: Joi.number().required(),
});

const scheme = {
    taskJoiSchema,
    boardJoiSchema,
    columnJoiSchema,
};

module.exports = { scheme };
