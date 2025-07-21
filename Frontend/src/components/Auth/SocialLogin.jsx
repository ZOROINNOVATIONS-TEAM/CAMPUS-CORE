import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";

const SocialLogin = () => {
  return (
	<div>
		<div className="flex items-center my-4 w-full">
			<div className="flex-grow h-px bg-gray-300" />
				<span className="px-4 text-gray-500 text-sm">or continue with</span>
			<div className="flex-grow h-px bg-gray-300" />
		</div>

		<div className="w-full flex justify-center mt-2">
		<div className="flex gap-4">
			<button className="bg-white shadow p-2 rounded w-10 flex justify-center items-center cursor-pointer">
			    <FcGoogle size={20} />
			</button>
			<button className="bg-white shadow p-2 rounded w-10 flex justify-center items-center cursor-pointer">
			    <FaMicrosoft size={20} className="text-blue-600" />
			</button>
			<button className="bg-white shadow p-2 rounded w-10 flex justify-center items-center cursor-pointer">
			    <FaApple size={20} />
			</button>
		</div>
		</div>
	</div>

  );
};

export default SocialLogin;