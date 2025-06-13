const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  pass: String,
});

module.exports = mongoose.model('Admin', adminSchema);
