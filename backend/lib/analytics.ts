// //Analytics controller (new file)
// import { Analytics } from './db';

// export const getAnalyticsData = async () => {
//   return await Analytics.findOne().sort({ createdAt: -1 });
// };

// export const generateReport = async () => {
//   // Mock report generation
//   return { message: "Report generated!" };
// };
import { AnalyticsModel, UserModel, CourseModel, FeeModel } from './db';

export const getAnalyticsData = async () => {
  return await AnalyticsModel.findOne().sort({ generatedAt: -1 }).lean();
};

export const generateReport = async () => {
  const totalStudents = await UserModel.countDocuments({ type: 'student' });
  const totalFaculty = await UserModel.countDocuments({ type: 'faculty' });
  const totalCourses = await CourseModel.countDocuments();

  const feeDocs = await FeeModel.find().lean();
  const feeCollected = feeDocs.reduce((sum, fee) => sum + (fee.paid_amount || 0), 0);

  const analyticsDoc = await AnalyticsModel.create({
    totalStudents,
    totalFaculty,
    totalCourses,
    feeCollected,
    generatedAt: new Date(),
  });

  return {
    message: "Report generated!",
    analytics: analyticsDoc
  };
};
