import React, { useState } from "react";
import axios from "axios";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      if (!username || !number) {
        throw new Error("Please fill in all the required fields.");
      }

      const response = await axios.post("https://efootball-api.onrender.com/login/login", {
        username,
        number,
      });

      const userId = response.data.userId;
      const { token } = response.data;
      const isAdmin = response.data.isAdmin;

      alert("success");

      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", isAdmin ? "true" : "false"); // Convert boolean value to st

      // Redirect to /home and refresh the page
      navigate("/home");
      window.location.reload();
    } catch (error) {
      setLoading(false);
      setError("Invalid username or password.");
      console.log(error);
    }
    setUsername("");
    setNumber("");
  };


  return (
    <div className="login">
      <div className="sign-up">
        Sign In/Sign Up to Continue <br />
        To Efootball <br />
        For help, reach out to the Admin!<br/><span className="span">Charles<sup>CK</sup></span> 
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
