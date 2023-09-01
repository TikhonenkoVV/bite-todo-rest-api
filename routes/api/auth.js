const express = require("express");
const authCtrl = require("../../controllers/auth");

const {
    validateBody,
    authenticate,
    upload,
    passport,
} = require("../../middlewares");
const { userSchemas } = require("../../schemas");

const router = express.Router();

router.post("/refresh", authCtrl.refreshToken);

router.post(
    "/register",
    validateBody(userSchemas.registerSchema),
    authCtrl.register
);

router.post("/login", validateBody(userSchemas.loginSchema), authCtrl.login);

router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    authCtrl.googleAuuth
);

router.get("/current", authenticate, authCtrl.getCurrent);

router.post("/logout", authenticate, authCtrl.logout);

router.patch("/", authenticate, authCtrl.updateUser);

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatarURL"),
    authCtrl.uploadAvatar
);
router.post("/help", authenticate, authCtrl.help);

module.exports = router;
