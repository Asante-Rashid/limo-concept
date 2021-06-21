const router = require("express").Router();
const checkoutController = require("../../controllers/checkoutController");

// ! this public key needs to be replaced with personal publik key held in the env file
// const stripe = require('stripe')('sk_test_51J3AspC6Y2vAkhwfVZyFmAM9RhYPupL4KMuaVcRFiHaYH4bVUq0M1fPTT2moUwRxn1BKMRSBEj6IfszX4aidRKwU00lBLalPNR');

// router.route("/")
//   .post(booksController.create);

// should with "/api/create-checkout-session"
router.route("/")
   .post(checkoutController.create);

  // app.post('/create-checkout-session', async (req, res) => {
  //   // ! this is going to need to be split into controllers and models
  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: 'usd',
  //           product_data: {
  //             name: 'Stubborn Attachments',
  //             images: ['https://i.imgur.com/EHyR2nP.png'],
  //           },
  //           unit_amount: 2000,
  //         },
  //         quantity: 1,
  //       },
  //     ],
  //     mode: 'payment',
  //     success_url: `${YOUR_DOMAIN}?success=true`,
  //     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  //   });
  //   res.json({ id: session.id });
  // });

module.exports = router;
