const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  rollno: { type: String, unique: true },
  pass: String,
});

module.exports = mongoose.model('Student', studentSchema);
