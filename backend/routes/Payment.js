const express = require('express');
const stripe = require('stripe');
const router = express.Router();

router.post('/payment' , async (req , res) => {
    const { amount , token } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount,
            currency : 'inr',
            source : token.id,
            descriptions : 'Payment'
        });
        res.json(charge);
    } catch (error) {
        res.status(500).json({ message : 'Payment failed' , error });
    }
});

module.exports = router;