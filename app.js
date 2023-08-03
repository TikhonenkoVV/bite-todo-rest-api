const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const boardsRouter = require("./routes/api/boards");
const { createErrorReq } = require("./helpers");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/boards", boardsRouter);
app.use(createErrorReq);

module.exports = app;
