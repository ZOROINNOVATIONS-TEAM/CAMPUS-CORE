import { useState } from "react";

const features = [
  { icon: "📚", label: "Course Management" },
  { icon: "🕒", label: "Schedule Tracking" },
  { icon: "📊", label: "Progress Analytics" },
  { icon: "💬", label: "Faculty Messaging" },
  { icon: "🔐", label: "Secure Access" },
  { icon: "📅", label: "Exam Calendar" },
];

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(features.length / itemsPerSlide);

  const getSlideItems = () => {
    const start = currentSlide * itemsPerSlide;
    return features.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="w-full text-white">
      <div className="flex gap-4 justify-center mb-4 transition-all duration-300">
        {getSlideItems().map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-md text-xs min-w-[120px] text-center"
          >
            <div className="text-xl mb-1">{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Functional Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
