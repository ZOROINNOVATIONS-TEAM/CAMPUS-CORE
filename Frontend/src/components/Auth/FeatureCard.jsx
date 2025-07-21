import { FaChartBar, FaClock, FaBook } from "react-icons/fa";

const icons = {
  course: <FaBook className="text-white text-2xl" />,
  schedule: <FaClock className="text-white text-2xl" />,
  progress: <FaChartBar className="text-white text-2xl" />,
};

const FeatureCard = ({ type, title }) => {
    return (
        <div className="flex flex-col items-center bg-blue-400  p-4 rounded-lg w-32 text-center">
            <div className="mb-2">{icons[type]}</div>
            <p className="text-white text-sm font-semibold">{title}</p>
        </div>
    );
};

export default FeatureCard;