const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentrouter = require("./routes/students");
const cors = require("cors");

dotenv.config();



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

app.listen(process.env.PORT||3000, async () => {
    console.log(`server up`);
  });