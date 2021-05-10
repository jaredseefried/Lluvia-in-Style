const router = require("express").Router();
const sendMailRoutes = require("./sendMail");

// Book routes
router.use("/sendMail", sendMailRoutes);

module.exports = router;
