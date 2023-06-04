import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import "./css/userprofile.css";
import { DisplayUserProfile } from "./displayProfile";


export const UserProfile = () => {
  const [photo, setPhoto] = useState(null);
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleProfilePhoto = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const saveProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("userName", userName);
      formData.append("number", number);

      const response = await axios.post(
        "https://efootball-api.onrender.com/addProfile/addProfile",
        formData
      );

      // Assuming the server response includes the user ID
      const userId = response.data.userId;
      const { token } = response.data;
    

      

      // Store the user ID in localStorage
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token)
      navigate("/home")
      alert("Success")
      

      // Handle success or redirect to another page
    } catch (error) {
      setLoading(false)
      console.log(error);
      // Handle error
    }
  };

  return (
    <div className="profile-profile">
      <div className="profilr">
        <h2>Create An Account</h2>
      To Register, input your own phone number, a profile picture and your Username
     </div>
        <div className="register-form">
           <div className="profile-photoo">
            <input
              type="file"
              onChange={handleProfilePhoto}
              required
              accept="image/*"
            />
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              required
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="phone">
            <input
              type="text"
              placeholder="phone-number"
              value={number}
              required
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            />
          </div>
       
         
        
        <button onClick={saveProfile} disabled={loading}>
          {loading ? "Please wait..." : "Register"} 
        
        </button>
      <h5>  You already have an account? <a href="/login">Login</a></h5>
        </div>
     
    </div>
  );
};
