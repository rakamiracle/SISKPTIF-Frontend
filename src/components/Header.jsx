import React from "react";
import logo from "../assets/logoimage.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleMasukClick = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-xl font-bold text-primary">SISKPTIF</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[2px] after:inline-block after:absolute after:bottom-0 after:bg-primary after:transition-all after:duration-[200ms]
      hover:after:scale-x-50 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
            >
              Beranda
            </a>
            <a
              href="#features"
              className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[2px] after:inline-block after:absolute after:bottom-0 after:bg-primary after:transition-all after:duration-[200ms]
      hover:after:scale-x-50 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
            >
              Fitur
            </a>
            <a
              href="#flow"
              className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[2px] after:inline-block after:absolute after:bottom-0 after:bg-primary after:transition-all after:duration-[200ms]
      hover:after:scale-x-50 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
            >
              Alur
            </a>
            <a
              href="#faq"
              className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[2px] after:inline-block after:absolute after:bottom-0 after:bg-primary after:transition-all after:duration-[200ms]
      hover:after:scale-x-50 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
            >
              FAQ
            </a>
            <button
              onClick={handleMasukClick}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
