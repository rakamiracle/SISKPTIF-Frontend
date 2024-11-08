import React, { useState } from "react";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/mahasiswa/Dashboard";
import LandingPage from "./pages/LandingPages";
import Pendaftaran from "./pages/mahasiswa/Pendaftaran";
import Status from "../src/pages/mahasiswa/Status";
import NotFound from "../src/pages/NotFound";
import DashboardLayoutMahasiswa from "./components/DashboardLayoutMahasiswa";
import Persyaratan from "./pages/mahasiswa/Persyaratan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<DashboardLayoutMahasiswa />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/persyaratan" element={<Persyaratan />} />
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
