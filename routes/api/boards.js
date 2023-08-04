const express = require("express");
const router = express.Router();
const { addBoard, addColumn, addTask } = require("../../controllers/boards");

const { scheme } = require("../../schemas/tasks");
const { validateBody, authenticate, isValidId } = require("../../middlewares");

router.post("/", authenticate, validateBody(scheme.boardJoiSchema), addBoard);
router.post(
  "/:boardId/columns",
  authenticate,
  isValidId,
  validateBody(scheme.columnJoiSchema),
  addColumn
);
router.post(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  validateBody(scheme.taskJoiSchema),
  addTask
);

module.exports = router;
