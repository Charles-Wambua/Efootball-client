import React, { useState } from "react";
import axios from "axios";
import "./css/fixtures.css";
import App from "./fixturesDisplay";
import FixtureGenerator from "./generateFixtures";

export const Fixtures = () => {
  const [image, setImage] = useState(null);
  const [player, setPlayer] = useState("");
  const [opponent, setOpponent] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("player", player);
      formData.append("opponent", opponent);
      formData.append("playerScore", playerScore);
      formData.append("opponentScore", opponentScore);

      await axios.post("http://localhost:3001/results/results", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Results uploaded, processing starts");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  const handleOpponentChange = (event) => {
    setOpponent(event.target.value);
  };

  const handlePlayerScoreChange = (event) => {
    setPlayerScore(Number(event.target.value));
  };

  const handleOpponentScoreChange = (event) => {
    setOpponentScore(Number(event.target.value));
  };

  return (
    <div className="fixtures">
      <div>
      <div className="image">
      
      <img src="/pes.jpg" alt="eFootball Championship" />
    
    
        </div>
        <div>
          {/* <App/> */}
        <FixtureGenerator/>
        </div>
        <div>
          <label htmlFor="player">Player:</label>
          <input
            type="text"
            name="player"
            value={player}
            onChange={handlePlayerChange}
            required
          />
        </div>
        <div>
          <label htmlFor="opponent">Opponent:</label>
          <input
            type="text"
            name="opponent"
            value={opponent}
            onChange={handleOpponentChange}
            required
          />
        </div>
        <div>
          <label htmlFor="playerScore">Player Score:</label>
          <input
            type="number"
            name="playerScore"
            value={playerScore}
            onChange={handlePlayerScoreChange}
            required
          />
        </div>
        <div>
          <label htmlFor="opponentScore">Opponent Score:</label>
          <input
            type="number"
            name="opponentScore"
            value={opponentScore}
            onChange={handleOpponentScoreChange}
            required
          />
        </div>
      </div>
      <div className="UploadResult">
        <label htmlFor="upload">Upload Results</label>
        <input
          type="file"
          name="upload"
          accept="image/*"
          onChange={handleImageChange}
         
        />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
};
