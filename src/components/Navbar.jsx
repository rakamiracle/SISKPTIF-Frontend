import React from "react";
import logo from "../assets/logoimage.png";
import ItemNavbar from "./ItemNavbar";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-xl font-bold text-primary">SISKPTIF</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ItemNavbar href="#home">Beranda</ItemNavbar>
            <ItemNavbar href="#feature">Fitur</ItemNavbar>
            <ItemNavbar href="#flow">Alur</ItemNavbar>
            <ItemNavbar href="#faq">FAQ</ItemNavbar>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
