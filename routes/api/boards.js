const express = require("express");
const router = express.Router();
const {
  addBoard,
  addColumn,
  addTask,
  updateTask,
  updateColumn,
  updateBoard,
} = require("../../controllers/boards");

const { scheme } = require("../../schemas/tasks");
const { validateBody, authenticate, isValidId } = require("../../middlewares");

router.post("/", authenticate, validateBody(scheme.boardJoiSchema), addBoard);
router.put(
  "/:boardId",
  authenticate,
  isValidId,
  validateBody(scheme.boardJoiSchema),
  updateBoard
);
router.post(
  "/:boardId/columns",
  authenticate,
  isValidId,
  validateBody(scheme.columnJoiSchema),
  addColumn
);
router.put(
  "/:boardId/columns/:columnId",
  authenticate,
  isValidId,
  validateBody(scheme.columnJoiSchema),
  updateColumn
);
router.post(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  validateBody(scheme.taskJoiSchema),
  addTask
);
router.put(
  "/:boardId/columns/:columnId/tasks/:taskId",
  authenticate,
  isValidId,
  validateBody(scheme.taskJoiSchema),
  updateTask
);

module.exports = router;
