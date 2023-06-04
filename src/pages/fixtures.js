import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/fixtures.css";
import FixturesDisplay from "./fixturesDisplay";
import FixtureGenerator from "./generateFixtures";

export const Fixtures = () => {
  const [image, setImage] = useState(null);
  const [player, setPlayer] = useState("");
  const [opponent, setOpponent] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [fixtures, setFixtures] = useState([]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("player", player);
      formData.append("opponent", opponent);
      formData.append("playerScore", playerScore);
      formData.append("opponentScore", opponentScore);

      await axios.post("https://efootball-api.onrender.com/results/results", formData, {
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

  const handlePlayerScoreChange = (event) => {
    setPlayerScore(Number(event.target.value));
  };

  const handleOpponentScoreChange = (event) => {
    setOpponentScore(Number(event.target.value));
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:3001/profile/${userId}/profile/${userId}`
          `https://efootball-api.onrender.com/profile/${userId}/profile/${userId}`
        );

        setPlayer(response.data.userName);
        // console.log(player)
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:3001/getFixtures/getFixtures"
          "https://efootball-api.onrender.com/getFixtures/getFixtures"
        );

        setFixtures(response.data.fixtures);
      //  console.log(fixtures) 
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchProfile();
      fetchFixtures();
    }
  }, []);

  useEffect(() => {
    if (player && fixtures.length > 0) {
      const currentPlayer = fixtures.find((round) =>
        round.matches.some(
          (match) =>
            match.homePlayer === player || match.awayPlayer === player
        )
      );
      // console.log(currentPlayer)

      if (currentPlayer) {
        const opponentMatch = currentPlayer.matches.find(
          (match) =>
            match.homePlayer === player || match.awayPlayer === player
        );
// console.log(opponentMatch)
        const opponent =
          opponentMatch.homePlayer === player
            ? opponentMatch.awayPlayer
            : opponentMatch.homePlayer;

        setOpponent(opponent);
        // console.log(opponent)
      } else {
        console.log("Player not found in fixtures");
      }
    }
  }, [player, fixtures]);

  return (
    <div className="fixtures">
      <div>
        <div className="fix">
          <h2>Upload Results</h2>
          <p>Strickly do not skip matches!</p>
          <p>In circumstances where you ought to skip matches, only the player whose next fixtures name matches yourname on the input shall post the score</p>
          <p>Players and opponents spaces fill automatically</p>
          <p>Remember to upload the creenshot with the results </p>
          <h3>Ensure you play a minimum of <span className="span">TWO</span> games a day to remain in league ⚠</h3>
          <div>
            <label htmlFor="player">Player:</label>
            <input
              type="text"
              name="player"
              placeholder="Finding your team name..."
              value={player}
              onChange={(event) => setPlayer(event.target.value)}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="opponent">Opponent:</label>
            <input
              type="text"
              name="opponent"
              placeholder="Finding your opponent...."
              value={opponent}
              required
              readOnly
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
          <label htmlFor="upload">Upload ScreenShot</label>
          <input
            type="file"
            name="upload"
            accept="image/*"
            required
            onChange={handleImageChange}
          />
          <button onClick={handleSubmit}>Upload</button>
        </div>
      </div>
      <div className="image">
        <img src="/pes.jpg" alt="eFootball Championship" />
      </div>
      <div>
        {fixtures.length > 0 && (
          <FixturesDisplay
            fixtures={fixtures.map((round) => ({
              ...round,
              matches: round.matches.map((match) => ({
                ...match,
                homeScore:
                  match.homePlayer === player ? playerScore : match.homeScore,
                awayScore:
                  match.awayPlayer === player ? opponentScore : match.awayScore,
              })),
            }))}
          />
        )}
      </div>
    </div>
  );
};
