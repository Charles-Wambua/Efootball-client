import React, { useState } from "react";
import axios from "axios";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://efootball-api.onrender.com/login/login", {
        username,
        number,
      });
      const userId = response.data.userId;
      const { token } = response.data;
      
      alert("success")
     
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
    } catch (error) {
      navigate("/home")
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
     <div className="sign-up">
        Sign In/Sign Up to Continue <br />
        To Efootball <br />
        For help reach out the Admin!<br/><span className="span">Charles<sup>CK</sup></span> 
     </div>
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="phone-number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"} 
        
        </button><br />
      <h5>Not registered? <Link to="/user-profile">Register</Link> </h5>
      </div>
      <div className="image">
        <img src="/pic.jpg" alt=""/>
      </div>
    </div>
  );
};
