const Student = require('../models/student');
const Faculty = require('../models/faculty');
const Admin = require('../models/admin');

async function initializeDB() {
  const studentCount = await Student.estimatedDocumentCount();
  const facultyCount = await Faculty.estimatedDocumentCount();
  const adminCount = await Admin.estimatedDocumentCount();

  if (studentCount === 0) console.log("✅ Student collection ready.");
  if (facultyCount === 0) console.log("✅ Faculty collection ready.");
  if (adminCount === 0) console.log("✅ Admin collection ready.");
}

module.exports = initializeDB;
