import React, { useState } from "react";
import axios from "axios";
import "./css/registerLeague.css";

export const RegisterLeague = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpesaName, setMpesaName] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

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
       axios
      .post("https://efootball-api.onrender.com/mpesa/payments/mpesa/payments", {
      
        phoneNumber,
        amount: 30,
       
      })
         
     
         .then((response) => {
        
               console.log(username, phoneNumber, registrationStatus)
        setRegistrationStatus("Registration successful!");
        axios.post("https://efootball-api.onrender.com/register-league/register-league", {
          username,
          mpesaName,
          phoneNumber
        })
        console.log(response.data);
      })
      .catch((error) => {
        // Handle registration error
        setRegistrationStatus("Registration failed. Please try again.");
        console.error(error);
      });

    // Clear the form fields after registration
    setUsername("");
    setMpesaName("")
    setPhoneNumber("");
  };

  return (
    <div className="a">
      
   
    <div className="register-container">
      <h2 className="register-title">Register for the League</h2>
      
      <div className="form-inp">
        
     
      <div className="form-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
              id="username"
              placeholder="Stictly Your Team Name"
          value={username}
          onChange={handleUsernameChange}
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
        />
      </div>
      <div className="form-field">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
              id="phoneNumber"
              placeholder="Start with 07/01...."
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="form-field">
        <label>Amount:</label>
        <input type="text" value="30 Ksh" readOnly  />
      </div>
      <button className="register-button" onClick={handleRegistration}>
        Register and Pay 30 Ksh via M-Pesa
      </button>
      {registrationStatus && (
        <div className="registration-status">{registrationStatus}</div>
        )}
      </div>
     
    </div>
      <div className="reg">
        <h2>Note</h2>
     Once you register successfuly, you will automatically be drawn on the upcoming league fixtures. Play hard to get in a position to earn prizes and badges. Acocording to your geographic location, your reg fee is <span>30 KSH</span>
     <h3>What to do</h3>
     <li>Ensure that the <span>Username</span>you put is the exact name of your team name</li>
     <li>Ensure that the <span>PHONE NUMBER</span> you put is your Mpesa Number for <span>Deposits</span> and <span>Withdrawals</span> as STK push menu will be send</li>
     <li>Click the button below to Register</li>
      </div>
      </div>
  );
};


export const RegisterTournament = () => {
    return <div>
        RegisterTournament
    </div>
}