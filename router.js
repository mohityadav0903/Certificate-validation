const router = require("express").Router();

const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("./controllers/Student");
const Student = require("./model/student");

router.get("/", (req, res) => {
  res.send("Router is working");
});

router.get("/Students", getStudents);
router.post("/Students", createStudent);
router.put("/Students/:StudentID", updateStudent);
router.delete("/Students/:StudentID", deleteStudent);

module.exports = router;
module.exports = { getStudents, createStudent };
