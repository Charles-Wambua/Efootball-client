import React, { useState } from "react";
import axios from "axios";
import "./css/registerLeague.css";

export const RegisterLeague = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRegistration = () => {
    // Perform registration logic here
    // You can make an API call to send the registration details to the server
    // and process the payment via M-Pesa

    // Example API call
    axios
      .post("http://localhost:3001/mpesa/payments/mpesa/payments", {
      
        phoneNumber,
        amount: 30,
       
      })
     
      .then((response) => {
        // Handle successful registration
        console.log(username, phoneNumber, registrationStatus)
        setRegistrationStatus("Registration successful!");
        console.log(response.data);
      })
      .catch((error) => {
        // Handle registration error
        setRegistrationStatus("Registration failed. Please try again.");
        console.error(error);
      });

    // Clear the form fields after registration
    setUsername("");
    setPhoneNumber("");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register for the League</h2>
      <div className="form-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
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
  );
};


export const RegisterTournament = () => {
    return <div>
        RegisterTournament
    </div>
}