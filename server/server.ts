import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Stripe from "stripe";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion:"2022-11-15"
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("API is running");
});

app.post("/pay", async (req: Request, res: Response) => {
  await stripe.charges.create({
    source:req.body.token.id,
    amount:req.body.amount,
    currency:"INR"
  })
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
