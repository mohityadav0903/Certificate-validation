const router = require("express").Router();
const Student = require("../model/student");


router.get('/validation/:id/:certificateId', async(req, res) => {
  const id = req.params.id;
  const certificateId = req.params.certificateId;
  const student = await Student.findOne({ _id: id});
  if(student){
    if(student.certificateId === certificateId){
    res.render('certificate', {student: student});
    }
    else{
      res.status(400).json({message: "Invalid request"});
    }
  }
  else{
  res.status(404).json({message: "Certificate is invalid"});
  }

})

module.exports = router;