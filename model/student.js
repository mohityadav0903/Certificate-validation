const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  github: {
    type: String,
    required: false,  
  },
  course:{
   type: String,
    required: true,
    default: "Web Development",
  },
  certificateId: {
    type: String,
    required: true,
    unique: true,
  },
},
{timestamps: true},
);

module.exports = mongoose.model("Student", StudentSchema);
