import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/fixturegenerator.css';

const FixtureGenerator = () => {
  const [players, setPlayers] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/profiles/profiles');
      const playersData = response.data;
      setPlayers(playersData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateFixtures = () => {
    const numPlayers = players.length;
    const numRounds = numPlayers - 1;
    const matchesPerRound = numPlayers / 2;

    const playerIndices = [...Array(numPlayers).keys()];

    const roundFixtures = [];
    for (let round = 0; round < numRounds; round++) {
      const roundMatches = [];

      for (let match = 0; match < matchesPerRound; match++) {
        const homeIndex = (round + match) % (numPlayers - 1);
        const awayIndex = (numPlayers - 1 - match + round) % (numPlayers - 1);

        const homePlayer = players[playerIndices[homeIndex]];
        const awayPlayer = players[playerIndices[awayIndex]];

        // Check if homePlayer and awayPlayer are the same
        if (homePlayer !== awayPlayer) {
          roundMatches.push({ homePlayer, awayPlayer });
        }
      }

      roundFixtures.push(roundMatches);

      playerIndices.splice(1, 0, playerIndices.pop());
    }

    setFixtures(roundFixtures);
  };

  return (
    <div className="fixtures">
      <button className="generate-btn" onClick={generateFixtures}>
        Generate Fixtures
      </button>

      {fixtures.length > 0 && (
        <div>
          <h2 className="fixtures-heading">Fixtures:</h2>
          {fixtures.map((round, index) => (
            <div className="round" key={index}>
              <h3>Round {index + 1}</h3>
              {round.map((match, matchIndex) => (
                <p className="match" key={matchIndex}>
                  {match.homePlayer.userName} vs {match.awayPlayer.userName}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FixtureGenerator;
