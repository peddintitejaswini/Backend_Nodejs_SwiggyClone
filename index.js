const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");
const firmRoutes = require("./routes/firmRoutes");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const app = express();
const path = require("path");
const port = process.env.port || 4000;

dotEnv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/product", productRoutes);
app.use("/uploads", express.static("uploads"));
app.listen(port, () => {
  console.log(`server started and running at ${port}`);
});

app.use("/", (req, res) => {
  res.send("<h1>Welcome to swiggy</h1>");
});
