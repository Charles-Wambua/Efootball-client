import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Room } from "./room";

export const App = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/profile/${userId}/profile/${userId}`
        );
        setProfile(response.data);
        setLoading(false);
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
    <UserContext.Provider value={profile.userName}>
      <Room />
    </UserContext.Provider>
  );
};
