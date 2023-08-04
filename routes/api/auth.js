const express = require("express");
const ctrlerWrapper = require("../../helpers/ctrlWrapper");
const authCtrl = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");
const {userSchemas} = require("../../schemas/userSchemas");

const router = express.Router();

router.post("/refresh", ctrlerWrapper(authCtrl.refreshToken));

router.post("/register", validateBody(userSchemas.registerSchema), ctrlerWrapper(authCtrl.register));

router.post("/login", validateBody(userSchemas.loginSchema), ctrlerWrapper(authCtrl.login));

router.get("/current", authenticate, ctrlerWrapper(authCtrl.getCurrent));

router.post("/logout", authenticate, ctrlerWrapper(authCtrl.logout));

router.patch("/", ctrlerWrapper(authCtrl.updateUser));

module.exports = router;

