const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const indexRouter = require("./routes/database");

require("dotenv").config();

const app = express();
mongoose.connect(process.env.PW_CONNECT);
const db = mongoose.connection;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//test connection status
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/", indexRouter);
// /--- Server listeing -----

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

module.exports = app;
