import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/activeplayers.css"

export const Players = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("https://efootball-api.onrender.com/profiles/profiles");
        setProfiles(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (profiles.length === 0) {
    return <div>No profiles found</div>;
  }

  return (
    <div className="usersavailable">
      <div className="profilesavailable">
      {profiles.map((profile) => (
        <div key={profile._id} className="profile">
          <div className="profile-photo">
            <img src={profile.photo} alt="Profile" />
          </div>
          <div className="name">{profile.userName}</div>
          <div className="phone">{profile.number}</div>
        </div>
      ))}
      </div>
       <div className="footer">
        <div className="subfooter">
          eFootball™ Championship Pro <br />
          FAQs
          <br />
          Sponsorship
          <br />
          Contact Us
          <br />
          個人情報等保護方針
          <br />
          Privacy Policy
          <br />
          Privacy Notice
          <br />
        </div>
        <div className="subfooter">
          ©2023 Konami Digital Entertainment
          <br />
          24/7 SUPPORT
        </div>
        <div class="subfooter">
          Charles™
          <div class="social-icons">
            <a
              href="https://wa.me/254114652533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/thatsme.charles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/Charles59676543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Charles-Wambua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
      
  );
};
