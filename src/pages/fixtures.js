import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/fixtures.css";
import FixturesDisplay from "./fixturesDisplay";

export const Fixtures = () => {
  const [player, setPlayer] = useState("");
  const [opponent, setOpponent] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://efootball-api.onrender.com/profile/${userId}/profile/${userId}`
        );

        setPlayer(response.data.userName);
        console.log(player);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          "https://efootball-api.onrender.com/fixtures/getFixtures"
        );
        const fixturesData = response.data.fixtures;

        // Find opponents from the fixtures
        const opponents = fixturesData.flatMap((round) =>
          round.matches.flatMap((match) => [match.homePlayer, match.awayPlayer])
        );

        // Remove duplicates and the current player
        const uniqueOpponents = [...new Set(opponents)].filter(
          (opponent) => opponent !== player
        );

        // Set the initial opponent as the first opponent in the list
        if (uniqueOpponents.length > 0) {
          const currentOpponentIndex = uniqueOpponents.indexOf(opponent);
          const nextOpponentIndex =
            currentOpponentIndex >= 0 ? currentOpponentIndex + 1 : 0;
          const nextOpponent =
            uniqueOpponents[nextOpponentIndex % uniqueOpponents.length];
          setOpponent(nextOpponent);
        }

        setFixtures(fixturesData);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchProfile();
      fetchFixtures();
    }
  }, []);

  return (
    <div className="fixtures">
      <div>
        <div className="fix">
          <div className="rules">
            <h2>Rules and Penalties</h2>
            <p>
              <li>
                All games should be played on time, failure to that a win and 2
                goals are awarded to the available opponent
              </li>
              <li>
                False score inputs other than the score in the screenshot will
                lead to <span className="span">Discontinuation</span>
              </li>
              <li>
                Each game is 12 minutes, no extra time or penalties for league
              </li>
              <li>
                For knockouts, penalties and extra time is allowed, after 12
                minutes of game
              </li>
              <li>
                Your <span className="span">UserName</span> and{" "}
                <span className="span">Team Name </span> should be similar for
                easier management
              </li>
            </p>
            <p>Strickly do not skip matches!</p>
            <p>
              In circumstances where you ought to skip matches, only the player
              whose next fixtures name matches your name on the input shall post
              the score
            </p>
            <p>Players and opponents spaces fill automatically</p>
            <p>Remember to upload the screenshot with the results </p>
            <h3>
              Ensure you play a minimum of <span className="span">TWO</span>{" "}
              games a day to remain in the league ⚠
            </h3>
          </div>
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
