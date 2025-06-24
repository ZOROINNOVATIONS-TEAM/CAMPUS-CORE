import { useState } from "react";
import {
  BookOpen,
  Clock,
  BarChart2,
  MessageCircle,
  Lock,
  CalendarDays,
} from "lucide-react";

const features = [
  { icon: <BookOpen className="w-6 h-6 mx-auto" />, label: "Course Management" },
  { icon: <Clock className="w-6 h-6 mx-auto" />, label: "Schedule Tracking" },
  { icon: <BarChart2 className="w-6 h-6 mx-auto" />, label: "Progress Analytics" },
  { icon: <MessageCircle className="w-6 h-6 mx-auto" />, label: "Faculty Messaging" },
  { icon: <Lock className="w-6 h-6 mx-auto" />, label: "Secure Access" },
  { icon: <CalendarDays className="w-6 h-6 mx-auto" />, label: "Exam Calendar" },
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
