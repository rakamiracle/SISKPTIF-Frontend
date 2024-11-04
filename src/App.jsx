import React, { useState } from "react";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/mahasiswa/Dashboard";
import LandingPage from "./pages/LandingPages";
import Pengajuan from "./pages/mahasiswa/Pengajuan";
import Status from "../src/pages/mahasiswa/Status";
import Pendaftaran from "../src/pages/mahasiswa/Pendaftaran";
import DashboardLayout from "./components/DashboardLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pengajuan" element={<Pengajuan />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
