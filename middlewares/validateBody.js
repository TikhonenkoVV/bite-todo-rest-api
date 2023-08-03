const { HttpError } = require("../helpers");

const validateBody = (scheme) => {
  const validate = (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return validate;
};

module.exports = validateBody;
