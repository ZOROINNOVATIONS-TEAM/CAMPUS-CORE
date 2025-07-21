import FeatureCard from "./FeatureCard";
import logo from '../../assets/logo.png';


const Greet = () => {
    return (
        
        <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-600 text-white rounded-2xl flex-col justify-center items-center p-6 mx-10 mt-[35px] h-[calc(100vh-80px)]">
            <img src={logo} alt="Campus Core" className="w-40 mb-8" />
            <h1 className="text-2xl font-bold mb-4 text-center text-amber-50">
            Welcome to Your Academic Journey
            </h1>
            <p className="text-center mb-8 text-sm">
                Manage your courses, track your schedule, and stay organized <br />throughout
                your academic term with our comprehensive <br />management platform.
            </p>
            
            <div className="flex gap-4 mb-8">
                <FeatureCard type="course" title="Course Management" />
                <FeatureCard type="schedule" title="Schedule Tracking" />
                <FeatureCard type="progress" title="Progress Analytics" />
            </div>

            <div className="bg-blue-400 bg-opacity-10 p-4 rounded-md text-sm italic">
                “The platform is intuitive and saves me hours each week.”<br />
                <span className="block mt-2 font-semibold"> - Dr. Michael T., Engineering Faculty</span>
            </div>
        </div>
    );
};

export default Greet;