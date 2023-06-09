import React, { useState } from "react";
import axios from "axios";

export const DeleteProfile = ({ userId, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const deleteProfile = async () => {
    setLoading(true);

    try {
      await axios.delete(`https://efootball-api.onrender.com/profile/${userId}`);
      setLoading(false);
      onDelete(); // Invoke the callback function to notify parent component
    } catch (error) {
      console.log(error);
      setLoading(false);
      // Handle error condition
    }
  };

  return (
    <div className="delete-profile">
      <button onClick={deleteProfile} disabled={loading}>
        {loading ? "Deleting..." : "Delete Profile"}
      </button>
    </div>
  );
};
