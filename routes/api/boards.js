const express = require("express");
const router = express.Router();
const { addBoard } = require("../../controllers/boards");

const { scheme } = require("../../schemas/tasks");
const { validateBody } = require("../../middlewares");

router.post("/", validateBody(scheme.boardJoiSchema), addBoard);

module.exports = router;
