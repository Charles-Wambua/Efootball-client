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
      // Make a POST request to the login API endpoint
      const response = await axios.post("http://localhost:3001/login/login", {
        username,
        number,
      });
      const userId = response.data.userId;

      // Assuming the server response includes the user ID and a token
      const { token } = response.data;
      
      alert("success")
      navigate("/home")

      // Store the user ID and token in localStorage
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);

      // Handle success or redirect to another page
    } catch (error) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="number"
          placeholder="phone-number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"} 
        
        </button><br />
      <h5>Not registered? <Link to="/user-profile">Register</Link> </h5>
      </div>
    </div>
  );
};
