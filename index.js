const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentrouter = require("./routes/students");
const cors = require("cors");

dotenv.config();

const port = 3000||process.env.PORT;
const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
  app.use('/api/student',studentrouter);
  app.get('/',(req,res)=>{
    res.send('Hello ');
    
  })

app.listen(port, async () => {
    console.log(`server up on port ${port}`);
  });