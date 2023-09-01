const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// const cloudinary = require("./cloudinary/cloudinary");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const authRouter = require("./routes/api/auth");
const boardsRouter = require("./routes/api/boards");
const columnsRouter = require("./routes/api/columns");
const tasksRouter = require("./routes/api/tasks");

const { createErrorReq } = require("./helpers");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/boards", boardsRouter);
app.use("/api/columns", columnsRouter);
app.use("/api/tasks", tasksRouter);

app.use(createErrorReq);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        res.status(400).json({ message: err.message });
    }
    if (err.code === 11000) {
        res.status(409).json({ message: "Already exist" });
    }
    const { status = 500, message = "server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
