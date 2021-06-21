const db = require("../models");

// ! this public key needs to be replaced with personal publik key held in the env file
const stripe = require('stripe')('sk_test_51J3AspC6Y2vAkhwfVZyFmAM9RhYPupL4KMuaVcRFiHaYH4bVUq0M1fPTT2moUwRxn1BKMRSBEj6IfszX4aidRKwU00lBLalPNR');

// Defining methods for the checkoutController
module.exports = {
  create: async(req, res) =>{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Stubborn Attachments',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ id: session.id });
  },

};
