const express = require("express");

const controller = require("../../controllers/auth");
const {
  validateBody,
  authenticate,
  upload,
  validateAvatar,
} = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controller.register
);

router.get("/verify/:verificationToken", controller.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), controller.resendVerifyEmail);

router.post("/login", validateBody(schemas.loginSchema), controller.login);

router.get("/current", authenticate, controller.getCurrent);

router.post("/logout", authenticate, controller.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  validateAvatar,
  controller.updateAvatar
);

module.exports = router;
