const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
require('dotenv').config();

const connectDB = require("./config/mongooseConnect");


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  } catch {
    console.log("Connection failed")
  }
};
start()