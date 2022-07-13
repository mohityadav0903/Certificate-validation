const router = require("express").Router();
const Student = require("../model/student");

router.post("/register", async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;