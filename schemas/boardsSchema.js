const Joi = require("joi");

const boardsSchema = Joi.object({
    title: Joi.string().min(2).max(32).required(),
    background: Joi.string().min(0),
    dashboardIcon: Joi.string().min(0),
});

module.exports = boardsSchema;
