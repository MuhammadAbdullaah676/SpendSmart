const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user.controller");
const transactionRouter = require("./routes/transaction.controller");

const PORT = 5005;
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/transactions", transactionRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/spend_smart_db")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log("Database not conected" + e);
  });

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
