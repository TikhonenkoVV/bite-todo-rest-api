const express = require("express");
const router = express.Router();
const { authenticate, isValidId, validateBody } = require("../../middlewares");
const { addTask, updateTask, deleteTask } = require("../../controllers/tasks");

const { tasksSchema } = require("../../schemas");

router.post("/", authenticate, isValidId, validateBody(tasksSchema), addTask);

router.patch(
    "/:taskId",
    authenticate,
    isValidId,
    validateBody(tasksSchema),
    updateTask
);

router.delete("/:taskId", authenticate, isValidId, deleteTask);

module.exports = router;
