const getStudents = (req, res) => {
  Student.find((err, Students) => {
    if (err) {
      res.send(err);
    }
    res.json(Students);
  });
};

const createStudent = (req, res) => {
  const Student = new Student({
    name: req.body.name,
    email: req.body.email,
    github: req.body.github,
  });

  Student.save((err, Student) => {
    if (err) {
      res.send(err);
    }
    res.json(Student);
  });
};

const updateStudent = (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.StudentID },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        github: req.body.github,
      },
    },
    { new: true },
    (err, Student) => {
      if (err) {
        res.send(err);
      } else res.json(Student);
    }
  );
};

const deleteStudent = (req, res) => {
  Student.deleteOne({ _id: req.params.StudentID })
    .then(() => res.json({ message: "Student Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = { getStudents, createStudent, updateStudent, deleteStudent };
