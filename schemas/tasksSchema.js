const Joi = require("joi");

const tasksSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date(),
    priority: Joi.string().valid("without", "low", "high", "medium"),
    index: Joi.number().required(),
    owner: Joi.string(),
});

module.exports = tasksSchema;
