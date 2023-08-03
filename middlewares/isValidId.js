const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const arrParams = Object.values(req.params);

  arrParams.forEach((id) => {
    if (!isValidObjectId(id)) {
      next(HttpError(400, `${id} invalid format`));
    }
  });
  next();
};

module.exports = isValidId;
