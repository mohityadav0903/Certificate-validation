const router = require("express").Router();
const Student = require("../model/student");


router.post('/validationLink', async(req, res) => {
  const certificateId = req.body.certificateId;
  const student = await Student.findOne({ certificateId});
  if(student){
    const link = `http://localhost:3000/api/student/validation/${student._id}/${certificateId}/`;
    res.status(200).json(link);
  }
  else{
  res.status(404).json({message: "Student not found"});
  }

})

// router.post("/register", async (req, res) => {
//   const student = new Student(req.body);
//   try {
//     await student.save();
//     res.send(student);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

module.exports = router;