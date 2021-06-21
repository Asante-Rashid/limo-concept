const router = require("express").Router();
const checkoutRoutes = require("./checkout");

// Checkout routes
router.use("/create-checkout-session", checkoutRoutes);

module.exports = router;
