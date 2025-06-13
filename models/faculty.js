const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  pass: String,
});

module.exports = mongoose.model('Faculty', facultySchema);
