const router = require("express").Router();
const contactFormRoutes = require("./contactForm");

// Book routes
router.use("/contactForm", contactFormRoutes);

module.exports = router;
