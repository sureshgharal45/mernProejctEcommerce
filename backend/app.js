const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");
const path = require("path");
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileupload());
//routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//middleware for error
app.use(errorMiddleware);

module.exports = app;
