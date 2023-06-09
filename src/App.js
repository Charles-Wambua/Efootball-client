import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./components/auth/register";
import { About } from "./components/about";
import { Navbar } from "./components/nav";
import { Banner } from "./components/banner";
import { Room } from "./components/chatRoom/room";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Players } from "./components/activeplayers";
import { Admin } from "./components/admin";
import { Tounaments } from "./components/tournament";
import { Fixtures } from "./pages/fixtures";
import { EplTable } from "./pages/table";
import { UserProfile } from "./components/userprofile/userProfile";
import { useNavigate } from "react-router-dom";
import { DisplayUserProfile } from "./components/userprofile/displayProfile";
import { RegisterLeague, RegisterTournament } from "./pages/registerTournamentLeague";
import { Login } from "./components/userprofile/loginProfile";

function App() {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <Router>
      {!token ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div className="App">
          <Banner />
          <Header />
          <Navbar />
          <Routes>
            <Route path="/signin" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/active-players" element={<Players />} />
            {isAdmin === "true" ? (
              <Route path="/admin-page" element={<Admin />} />
            ) : (
              <Route path="/admin-page" element={<Navigate to="/home" />} />
            )}
            <Route path="/tournaments" element={<Tounaments />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/table" element={<EplTable />} />
            <Route path="/display-profile" element={<DisplayUserProfile />} />
            <Route path="/register-tournament" element={<RegisterTournament />} />
            <Route path="/register-league" element={<RegisterLeague />} />
            <Route path="/live-chat" element={<Room />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
