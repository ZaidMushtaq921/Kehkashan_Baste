const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const dbgr = require("debug")('dev:app')

require("dotenv").config();

const connectDB = require("./config/mongooseConnect");
const usersRouter = require("./routes/usersRouter")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter");



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      dbgr(`Server is running on port ${PORT}`);
      console.log("check")
    });
  } catch {
    dbgr("Connection failed");
  }
};
start();
