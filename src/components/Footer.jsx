import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">SISKPTIF</h4>
            <p className="text-blue-200">
              Sistem Informasi Seminar Kerja Praktik Teknik Informatika
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Email: info@siskptif.ac.id</li>
              <li>Phone: (021) 1234567</li>
              <li>Address: Jl. Kampus No. 1</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 SISKPTIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
