require('dotenv').config(); 

const cookieParser = require('cookie-parser'); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;
const app = express();

const authRoute = require("./routes/AuthRoute");

// Middleware
app.use(cors({ origin: [
   "http://localhost:3000",
    "http://localhost:3001",
    "https://investify-efoocym2f-sairajpatil035-1057s-projects.vercel.app/login",
    "https://investify-iota.vercel.app/"
],
   credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings); 
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Database & Server
mongoose.connect(uri)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});



