import { Link } from "react-router-dom";
import "./css/navbar.css";
import { DisplayUserProfile } from "./userprofile/displayProfile";
export const Navbar = () => {
  const userId = localStorage.getItem("userId");
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/live-chat">Live chat</Link>
        <Link to="/active-players">Active Players</Link>
        <Link to="/admin-page">Admin</Link>
        <Link to="/about">About us</Link>
       
      </div>
    </div>
  );
};
