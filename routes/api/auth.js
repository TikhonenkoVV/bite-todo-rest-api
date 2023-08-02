const express = require("express");
const controllWrapper = require("../../helpers/ctrlWrapper");
const authCtrl = require("../../controllers/auth");

const router = express.Router();

router.post("/refresh", controllWrapper(authCtrl.refreshToken));
