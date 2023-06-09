import React, { useState } from "react";
import axios from "axios";
import "./css/registerLeague.css";

const CopyableField = ({ label, value, onChange }) => {
  const handleCopyValue = () => {
    navigator.clipboard.writeText(value);
    alert(`${label} copied to clipboard!`);
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="copyable-field">
      <label htmlFor={label}>{label}:</label>
      <span className="copy-icon" onClick={handleCopyValue}>
        {value}
      </span>
    </div>
  );
};

export const RegisterLeague = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpesaName, setMpesaName] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMpesaNameChange = (event) => {
    setMpesaName(event.target.value);
  };

  const handleRegistration = () => {
    if (!username || !phoneNumber || !mpesaName) {
      setFormError("Please fill in all the required fields!");
      return;
    }

    setLoading(true);
    axios
      .post("https://efootball-api.onrender.com/register-league//register-league", {
        username,
        mpesaName,
        phoneNumber,
      })
      .then((response) => {
        setLoading(false);
        setApprovalStatus("Registration submitted for approval.");
        // Clear the form fields after registration
        setUsername("");
        setMpesaName("");
        setPhoneNumber("");
        setFormError("");
      })
      .catch((error) => {
        setLoading(false);
        setApprovalStatus("Registration failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="a">
      <div className="register-container">
        <h2 className="register-title">Register for the League</h2>
        <p>⚠ For questions, help reach out admin 👇👇</p>
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
          </div>

        <div className="form-inp">
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Strictly Your Team Name"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="mpesa-name">Registered Mpesa Name:</label>
            <input
              type="text"
              id="mpesa-name"
              placeholder="Your Mpesa Reg name"
              value={mpesaName}
              onChange={handleMpesaNameChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Start with 07/01...."
              value={phoneNumber}
              required
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="form-field">
            <CopyableField label="Till Number" value="8503400" />
          </div>
          <div className="form-field">
            <label>Amount:</label>
            <div>30 Ksh</div>
          </div>

          <button
            className="register-button"
            onClick={handleRegistration}
            disabled={loading}
          >
            {loading
              ? "Done, wait for admin to approve payment!"
              : "Register and Pay 30 Ksh via M-Pesa"}
          </button>
          {formError && <div className="error-message">{formError}</div>}
          {approvalStatus && (
            <div className="approval-status">{approvalStatus}</div>
          )}
        </div>
      </div>
      <div className="reg">
        <h2>Note</h2>
        Once you register successfully, you will automatically be drawn on the
        upcoming league fixtures. Play hard to get in a position to earn prizes
        and badges. According to your geographic location, your reg fee is{" "}
        <span>30 KSH</span>
        <h3>What to do</h3>
        <li>
          Ensure that the <span>Username</span> you put is the exact name of
          your team name
        </li>
        <li>
          Ensure that the <span>PHONE NUMBER</span> you put is your Mpesa Number
          for <span>Deposits</span> and <span>Withdrawals</span> as STK push
          menu will be sent
        </li>
        <li>Click the button below to Register</li>
      </div>
      
    </div>
    

  );
};
export const RegisterTournament = () => {
  return <div>RegisterTournament</div>;
};