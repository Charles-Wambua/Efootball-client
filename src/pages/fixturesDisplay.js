import React, { useState } from "react";
import axios from "axios";
import "./css/showFixtures.css";

const FixturesDisplay = ({ fixtures, onPostResult }) => {
  const [clickedMatch, setClickedMatch] = useState(null);
  const [playerScore, setPlayerScore] = useState("");
  const [opponentScore, setOpponentScore] = useState("");
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handlePlayerScoreChange = (event) => {
    setPlayerScore(event.target.value);
  };

  const handleOpponentScoreChange = (event) => {
    setOpponentScore(event.target.value);
  };

  const handleImageChange = (event) => {
    setResultImage(event.target.files[0]);
  };

  const handlePostResult = (match) => {
    setClickedMatch(match);
    setPlayerScore("");
    setOpponentScore("");
    setResultImage(null);
    setIsButtonDisabled(true);
  };

  const handleSaveResult = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", resultImage);
      formData.append("player", clickedMatch.homePlayer);
      formData.append("opponent", clickedMatch.awayPlayer);
      formData.append("playerScore", playerScore);
      formData.append("opponentScore", opponentScore);

      await axios.post("https://efootball-api.onrender.com/results/results", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Results uploaded, processing starts");
      

      const resultsData = {
        
        playerScore: playerScore,
        opponentScore: opponentScore,
      };

      await axios.post(`https://efootball-api.onrender.com/fixtures/postResults/${clickedMatch._id}`, resultsData);

      console.log("Results stored in the database.");

      setClickedMatch(null);
      setPlayerScore("");
      setOpponentScore("");
      setResultImage(null);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="fixturess">
      {fixtures.length > 0 && (
        <div>
          <h2 className="fixtures-heading">Fixtures:</h2>
          {fixtures.map((round, index) => (
            <div className="round" key={index}>
              <h3>Round {index + 1}</h3>
              {round.matches.map((match, matchIndex) => (
                <div className="match" key={matchIndex}>
                  <span className="homePlayer">
                    {match.homePlayer} ({match.homeScore === null ? "open" : match.homeScore})
                  </span>{" "}
                  <span className="vs">vs</span>{" "}
                  <span className="awayPlayer">
                    {match.awayPlayer} ({match.awayScore === null ? "open" : match.awayScore})
                  </span>
                  {clickedMatch === match && (
                    <div>
                      <input
                        type="number"
                        placeholder="Player Score"
                        value={playerScore}
                        onChange={handlePlayerScoreChange}
                      />
                      <input
                        type="number"
                        placeholder="Opponent Score"
                        value={opponentScore}
                        onChange={handleOpponentScoreChange}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <button onClick={handleSaveResult} disabled={loading}>{ loading? "saving...":"Save"}</button>
                    </div>
                  )}
                  {(match.homeScore === null || match.awayScore === null) && (
                    <button onClick={() => handlePostResult(match)}    disabled={isButtonDisabled}>Post Result</button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FixturesDisplay;
