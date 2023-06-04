import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/displayprofile.css";
import { Room } from "../../components/chatRoom/room";

export const DisplayUserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://efootball-api.onrender.com/profile/${userId}/profile/${userId}`
        );
        setProfile(response.data);
        setLoading(false);
        // setUsername(response.data.userName); // Set the username state
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error: Failed to fetch profile data</div>;
  }

  return (
    <div>
      <div className="profile">
        <div className="profile-photo">
          <img src={profile.photo} alt="Profile" />
        </div>
        <div className="name">{profile.userName}</div>
        <div className="phone">{profile.number}</div>
      </div>
       
    </div>
    
  );
};
