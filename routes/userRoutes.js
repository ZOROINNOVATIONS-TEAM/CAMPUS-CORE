const express = require('express');
const Student = require('../models/student');
const Faculty = require('../models/faculty');
const Admin = require('../models/admin');

const router = express.Router();

// Add new user
router.post('/add', async (req, res) => {
  const { role, data } = req.body;

  try {
    let result;
    if (role === 'student') result = await new Student(data).save();
    else if (role === 'faculty') result = await new Faculty(data).save();
    else if (role === 'admin') result = await new Admin(data).save();
    else return res.status(400).send("❌ Invalid role");
    
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/faculty', async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all admins
router.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Find user
router.get('/find', async (req, res) => {
  const { role, uid, email, rollno } = req.query;

  try {
    let user;
    if (role === 'student') {
      if (uid) user = await Student.findById(uid);
      else if (email) user = await Student.findOne({ email });
      else if (rollno) user = await Student.findOne({ rollno });
    } else if (role === 'faculty') {
      user = uid ? await Faculty.findById(uid) : await Faculty.findOne({ email });
    } else if (role === 'admin') {
      user = uid ? await Admin.findById(uid) : await Admin.findOne({ email });
    } else {
      return res.status(400).send("Invalid role");
    }

    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update email
router.patch('/update-email/:uid', async (req, res) => {
  const { role, email } = req.body;
  const { uid } = req.params;

  let Model = getModel(role);
  if (!Model) return res.status(400).send("Invalid role");

  try {
    const user = await Model.findByIdAndUpdate(uid, { email }, { new: true });
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update password
router.patch('/update-pass/:uid', async (req, res) => {
  const { role, pass } = req.body;
  const { uid } = req.params;

  let Model = getModel(role);
  if (!Model) return res.status(400).send("Invalid role");

  try {
    const user = await Model.findByIdAndUpdate(uid, { pass }, { new: true });
    if (!user) return res.status(404).send(" User not found");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function getModel(role) {
  if (role === 'student') return Student;
  if (role === 'faculty') return Faculty;
  if (role === 'admin') return Admin;
  return null;
}

module.exports = router;
