const express = require("express");
const ctrlerWrapper = require("../../helpers/ctrlWrapper");
const authCtrl = require("../../controllers/auth");

const {
    validateBody,
    authenticate,
    upload,
    passport,
} = require("../../middlewares");
const { userSchemas } = require("../../schemas/userSchemas");

const router = express.Router();

router.post("/refresh", ctrlerWrapper(authCtrl.refreshToken));

router.post(
    "/register",
    validateBody(userSchemas.registerSchema),
    ctrlerWrapper(authCtrl.register)
);

router.post(
    "/login",
    validateBody(userSchemas.loginSchema),
    ctrlerWrapper(authCtrl.login)
);

router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    authCtrl.googleAuuth
);

router.get("/current", authenticate, ctrlerWrapper(authCtrl.getCurrent));

router.post("/logout", authenticate, ctrlerWrapper(authCtrl.logout));

router.patch("/", authenticate, ctrlerWrapper(authCtrl.updateUser));

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatarURL"),
    ctrlerWrapper(authCtrl.uploadAvatar)
);
router.post("/help", authenticate, ctrlerWrapper(authCtrl.help));

module.exports = router;
