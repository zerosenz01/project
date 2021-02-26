require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./api/users/user.router");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.use(express.json());
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
app.use(cors());
app.options("*", cors());
