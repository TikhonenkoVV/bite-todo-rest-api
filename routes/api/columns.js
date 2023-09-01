const express = require("express");
const router = express.Router();
const {
    addColumn,
    getColumns,
    updateColumn,
    deleteColumn,
} = require("../../controllers/columns");
const { authenticate, isValidId, validateBody } = require("../../middlewares");
const { columnsSchema } = require("../../schemas");

router.post(
    "/",
    authenticate,
    isValidId,
    validateBody(columnsSchema),
    addColumn
);

router.get("/:owner", authenticate, isValidId, getColumns);

router.patch(
    "/:columnId",
    authenticate,
    isValidId,
    validateBody(columnsSchema),
    updateColumn
);

router.delete("/:columnId", authenticate, isValidId, deleteColumn);

module.exports = router;
