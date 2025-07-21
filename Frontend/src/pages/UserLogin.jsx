import { useState } from "react";
import Greet from "../components/Auth/Greetpanel";
import AuthTabs from "../components/Auth/AuthTabs";
import LoginForm from "../components/Auth/LoginForm";
import SocialLogin from "../components/Auth/SocialLogin";
import MobileViewIcon from "../components/Auth/MobileViewIcon";

const UserLogin = () => {
    const [role, setRole] = useState("student");
    const [mode, setMode] = useState("login");

    return (
        <div className="flex flex-col lg:flex-row h-full min-h-screen bg-gray-100">
            <Greet />
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 py-20">
                <div className="w-full max-w-md rounded-2xl shadow-md px-6 py-8 bg-white lg:bg-transparent lg:shadow-none lg:rounded-none">
                    <MobileViewIcon />
                    <AuthTabs role={role} setRole={setRole} />
                    <LoginForm role={role} mode={mode} setMode={setMode} />
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default UserLogin;