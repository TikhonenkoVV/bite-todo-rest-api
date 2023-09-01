const express = require("express");
const router = express.Router();
const {
    addBoard,
    updateBoard,
    getAllBoards,
    deleteBoard,
} = require("../../controllers/boards");

const { boardsSchema } = require("../../schemas");

const { validateBody, authenticate, isValidId } = require("../../middlewares");

router.post("/", authenticate, validateBody(boardsSchema), addBoard);

router.get("/", authenticate, getAllBoards);

router.patch(
    "/:boardId",
    authenticate,
    isValidId,
    validateBody(boardsSchema),
    updateBoard
);

router.delete("/:boardId", authenticate, isValidId, deleteBoard);

module.exports = router;
