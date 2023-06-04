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
      const response = await axios.get('https://efootball-api.onrender.com/get-registeredPlayers/get-registeredPlayers');
      const playersData = response.data.registeredPlayers.map((player) => player.username);
      setPlayers(playersData);
      console.log(playersData);
    } catch (error) {
      console.log(error);
    }
  };
  

  const generateFixtures = async () => {
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
          roundMatches.push({ homePlayer: homePlayer, awayPlayer: awayPlayer });
        }
      }

      roundFixtures.push({ matches: roundMatches });

      playerIndices.splice(1, 0, playerIndices.pop());
    }

    setFixtures(roundFixtures);
    sendFixturesToServer(roundFixtures); // Send fixtures data to the server
  };

  const sendFixturesToServer = async (fixturesData) => {
    try {
      await axios.post('https://efootball-api.onrender.com/postFixtures/postFixtures', fixturesData);
      console.log('Fixtures stored in the database.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixtures">
      <button className="generate-btn" onClick={generateFixtures}>
        Generate Fixtures
      </button>

      {/* {fixtures.length > 0 && (
        <div>
          <h2 className="fixtures-heading">Fixtures:</h2>
          {fixtures.map((round, index) => (
            <div className="round" key={index}>
              <h3>Round {index + 1}</h3>
              {round.map((match, matchIndex) => (
                <p className="match" key={matchIndex}>
                  {match.homePlayer} vs {match.awayPlayer}
                </p>
              ))}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default FixtureGenerator;
