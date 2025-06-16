
const WelcomeBanner = () => {
  return (
    <div className="relative bg-[#3666F6]">
      <div className="absolute inset-0">
        <img
          src="/images/pattern.png"
          alt=""
          className="w-full h-full object-cover mix-blend-overlay opacity-10"
        />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Welcome back, Dev!</h1>
            <p className="mt-1 text-sm text-white/90">Mon June 16, 2025 | Spring Semester 2025</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <span className="block text-xs text-white/80">Next Class</span>
            <span className="block text-sm font-medium text-white">Advanced Mathematics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
