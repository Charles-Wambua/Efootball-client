import React, { useState } from "react";
import axios from "axios";

export const UpdateProfile = ({ userId }) => {
  const [photo, setPhoto] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProfilePhoto = (event) => {
    setPhoto(event.target.files[0]);
  };

  const updateProfile = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("userName", userName);
    formData.append("number", number);

    try {
      await axios.put(`https://efootball-api.onrender.com/profile/${userId}`, formData);
      setLoading(false);
      // Perform any necessary actions after successful profile update
    } catch (error) {
      console.log(error);
      setLoading(false);
      // Handle error condition
    }
  };

  return (
    <div className="update-profile">
      <div className="profile-photo">
        <input type="file" onChange={handleProfilePhoto} accept="image/*" />
      </div>
      <div className="name">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="phone">
        <input
          type="text"
          placeholder="Phone number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <button onClick={updateProfile} disabled={loading}>
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
};
