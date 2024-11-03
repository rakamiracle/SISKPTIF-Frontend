import React from "react";
import Sidebar from "../../components/Sidebar";
import {
  FaBell,
  FaHome,
  FaPen,
  FaClipboard,
  FaCalendar,
  FaFile,
} from "react-icons/fa";
import logo from "../../assets/logoimage.png";
import Card from "../../components/Card";

const Dashboard = () => {
  const menuItems = [
    { icon: <FaHome className="w-6 h-6" />, text: "Beranda", active: true },
    { icon: <FaPen className="w-6 h-6" />, text: "Pengajuan" },
    { icon: <FaClipboard className="w-6 h-6" />, text: "Pendaftaran" },
    { icon: <FaCalendar className="w-6 h-6" />, text: "Jadwal" },
    { icon: <FaFile className="w-6 h-6" />, text: "Status" },
  ];

  const cards = [
    {
      title: "Dokumen Pengajuan Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pemdaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Pendaftaran Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pemdaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Jadwal Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pemdaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Pelaporan Dokumen Pasca Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pemdaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Status Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pemdaftaran seminar hasil kerja praktik.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} logo={logo} />

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="text-xl">Beranda</h1>
            <div className="flex items-center space-x-4">
              <FaBell className="w-6 h-6" />
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
          </div>
        </header>

        <main className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Halo, Gilang Ramadhan Indra</h2>
            <p className="text-gray-500 text-lg">
              Ingin melakukan apa hari ini?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
