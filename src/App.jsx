import React, {useState} from "react";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/mahasiswa/Dashboard";
import LandingPage from "./pages/LandingPages";
import Pendaftaran from "./pages/mahasiswa/Pendaftaran";
import Status from "../src/pages/mahasiswa/Status";
import NotFound from "../src/pages/NotFound";
import DashboardLayoutMahasiswa from "./components/DashboardLayout.jsx";
import Persyaratan from "./pages/mahasiswa/Persyaratan";
import PascaSeminar from "./pages/mahasiswa/PascaSeminar.jsx";
import DashboardInstansi from "./pages/instansi/Dashboard.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route element={<DashboardLayoutMahasiswa/>}>
                    <Route path="/mahasiswa/dashboard" element={<Dashboard/>}/>
                    <Route path="/mahasiswa/pendaftaran" element={<Pendaftaran/>}/>
                    <Route path="/mahasiswa/persyaratan" element={<Persyaratan/>}/>
                    <Route path="/mahasiswa/pasca-seminar" element={<PascaSeminar/>}/>
                    <Route path="/mahasiswa/status" element={<Status/>}/>
                </Route>
                <Route path="/pembimbingInstansi/Dashboard" element={<DashboardInstansi/>}/>
            </Routes>
        </Router>
    );
};

export default App;
