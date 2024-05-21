import express from "express";
const StripeRouter = express.Router();
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);


StripeRouter.post("/create-checkout-session", async (req, res) => {
//ErrorHandling if product is not an Array
  if (!Array.isArray(req.body.products)) {
    return res.status(400).send({ error: "Products must be an array." });
  }

  const { products,cartItem } = req.body;
  console.log(products);


  //LineItems
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.new_price * 100),
    },
    quantity: cartItem[product.id],
  }));


  //checkoutSession
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url:
      "https://shopy-mohitparmar1s-projects.vercel.app/user/paymentsuccess",
    cancel_url:
      "https://shopy-mohitparmar1s-projects.vercel.app/user/paymentfail",
    shipping_address_collection: {
      allowed_countries: ["IN", "US"],
    },
    phone_number_collection: {
      enabled: true,
    },
  });

  res.json({
    id: session.id,
    url: session.url,
  })

});

export default StripeRouter;
