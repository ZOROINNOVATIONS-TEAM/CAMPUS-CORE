function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">Welcome back, Dev!</h2>
        <p>Wednesday, June 11, 2025 | Spring Semester 2025</p>
        <p className="text-sm">Student ID: ST2023456</p>
      </div>
      <div className="text-right">
        <p className="font-medium">Next Class</p>
        <p className="text-sm">Advanced Mathematics in 45 minutes</p>
      </div>
    </div>
  );
}
export default WelcomeCard;