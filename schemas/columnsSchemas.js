const Joi = require("joi");

const columnsSchema = Joi.object({
    title: Joi.string().min(2).max(32).required(),
    index: Joi.number().required(),
    owner: Joi.string().required(),
});

module.exports = columnsSchema;
