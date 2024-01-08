const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const cntrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), cntrl.register);
router.post("/login", validateBody(schemas.loginSchema), cntrl.login);
router.get("/current", authenticate, cntrl.getCurrent);
router.post("/logout", authenticate, cntrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  cntrl.updateAvatar
);
// upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}])
// upload.array("cover", 8)

module.exports = router;
