import RegisterForm from './RegisterForm';

const AdminRegisterForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Registration</h2>
      <RegisterForm userType="admin" />
    </div>
  );
};

export default AdminRegisterForm;
