import { useState } from "react";
import Greet from "../components/Auth/Greetpanel";
import AdminForm from "../components/Auth/AdminLoginForm"



const AdminPage = () => {


    return (
        <div className="flex flex-col lg:flex-row h-full min-h-screen bg-gray-100">
            <Greet />
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 py-20">
                <AdminForm />
            </div>
        </div>
    );
};

export default AdminPage;
