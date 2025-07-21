import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

// Example animated background (simple CSS animation)
const AnimatedBg = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-blue-200 via-blue-400 to-purple-300 opacity-30 rounded-full blur-3xl animate-bounce-slow" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-300 to-yellow-100 opacity-40 rounded-full blur-2xl animate-pulse" />
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#f5f6fa] overflow-x-hidden">
      <AnimatedBg />

      {/* Header */}
      <header className="w-full px-8 py-6 flex justify-between items-center bg-white shadow-md z-10">
        <div className="flex items-center gap-2">
          {/* <svg width={38} height={38} viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="19" fill="#3666F6"/><text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" dominantBaseline="middle" fontFamily="sans-serif">SC</text></svg>*/}
          <span className="text-2xl font-bold text-[#3666F6] tracking-wide">SmartCampus</span> 
         
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {/* <a href="#about" className="text-gray-600 hover:text-[#3666F6] transition font-medium">About</a> */}
          <a href="#features" className="text-gray-600 hover:text-[#3666F6] transition font-medium">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-[#3666F6] transition font-medium">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col pt-6 items-center justify-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#222] mb-6 animate-fadein-down">
          Welcome to <span className="text-[#3666F6]">SmartCampus</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-600 mb-10 animate-fadein-up">
          The all-in-one digital platform for a smarter, seamless, and more connected campus experience.<br />
          Empowering students, faculty, and staff with integrated tools for learning, collaboration, and campus life.
        </p>
        <a
          href="/auth"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#3666F6] to-[#7B61FF] text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform animate-bounce"
        >
          Get Started
        </a>
      </section>

     

      {/* Features Section */}
      <section id="features" className="py-16 bg-[#eef4fe] flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#3666F6] mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-2">
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition animate-fadein-up">
            <div className="text-4xl mb-3 text-[#3666F6]">📅</div>
            <h3 className="font-bold text-lg mb-2">Smart Scheduling</h3>
            <p className="text-gray-600">Plan classes, events, and deadlines with a dynamic, color-coded calendar.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition animate-fadein-up">
            <div className="text-4xl mb-3 text-[#3666F6]">🗺️</div>
            <h3 className="font-bold text-lg mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Find buildings, facilities, and your classroom instantly with live campus navigation.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition animate-fadein-up">
            <div className="text-4xl mb-3 text-[#3666F6]">💬</div>
            <h3 className="font-bold text-lg mb-2">Seamless Communication</h3>
            <p className="text-gray-600">Connect with faculty and peers via integrated chat and announcements.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 flex flex-col items-center bg-white">
        <h2 className="text-3xl font-bold text-[#3666F6] mb-6">Contact & Support</h2>
        <p className="text-gray-700 text-lg mb-4">Have a question or need help? Reach out to our SmartCampus support team.</p>
        <a
          href="mailto:support@smartcampus.com"
          className="px-8 py-3 bg-[#3666F6] text-white rounded-full font-semibold text-lg shadow hover:scale-105 transition-transform"
        >
          ZOROINNOVATION.com
        </a>
      </section>

      {/* Footer */}
     <Footer/>

      {/* Animations */}
      <style>{`
        .animate-fadein-down {
          animation: fadeinDown 1s ease;
        }
        .animate-fadein-up {
          animation: fadeinUp 1.2s ease;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3.5s infinite alternate;
        }
        @keyframes fadeinDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeinUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes bounceSlow {
          0% { transform: translate(-50%, 0);}
          100% { transform: translate(-50%, 60px);}
        }
      `}</style>
    </div>
  );
}