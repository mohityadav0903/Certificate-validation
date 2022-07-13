const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./router");
const cors = require("cors");
const { Router } = require("express");

dotenv.config();

const PORT = 3000;
const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
Router(app);
