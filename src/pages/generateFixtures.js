import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/fixturegenerator.css';

const FixtureGenerator = () => {
  const [players, setPlayers] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('https://efootball-api.onrender.com/register-league/get-approvedPlayers');
      const playersData = response.data.approvedPlayers.map((player) => player.username);
      setPlayers(playersData);
    } catch (error) {
      console.log(error);
    }
  };
  
  const generateFixtures = async () => {
    setIsLoading(true);
    const numPlayers = players.length;
  
    // Create a copy of the players array to shuffle the indices
    const shuffledPlayers = [...players];
  
    // Shuffle the players randomly
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }
  
    const numRounds = numPlayers - 1;
    const matchesPerRound = numPlayers / 2;
  
    const roundFixtures = [];
    for (let round = 0; round < numRounds; round++) {
      const roundMatches = [];
  
     for (let match = 0; match < matchesPerRound; match++) {
  let homeIndex = match;
  let awayIndex = numPlayers - 1 - match;

  let homePlayer = shuffledPlayers[homeIndex];
  let awayPlayer = shuffledPlayers[awayIndex];

  
  if (homePlayer === awayPlayer) {
   
    awayIndex = (awayIndex + 1) % numPlayers;
    awayPlayer = shuffledPlayers[awayIndex];
  }

  roundMatches.push({ homePlayer, awayPlayer });
}
  
      roundFixtures.push({ matches: roundMatches });
  
      // Rotate the players for the next round
      shuffledPlayers.splice(1, 0, shuffledPlayers.pop());
    }
  
    // Generate fixtures for the second leg (reverse matches)
    const secondLegFixtures = roundFixtures.map((round) => {
      const secondLegMatches = round.matches.map((match) => {
        return {
          homePlayer: match.awayPlayer,
          awayPlayer: match.homePlayer,
        };
      });
      return { matches: secondLegMatches };
    });
  
    const allFixtures = roundFixtures.concat(secondLegFixtures);
    setFixtures(allFixtures);
    sendFixturesToServer(allFixtures); // Send fixtures data to the server
  };
  
  
  
  

  const sendFixturesToServer = async (fixturesData) => {
    try {
      await axios.post('https://efootball-api.onrender.com/fixtures/postFixtures', fixturesData);
      setIsLoading(true);
      console.log('Fixtures stored in the database.');

    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="fixturess">
      <button
        className="generate-btn"
        onClick={generateFixtures}
        disabled={isLoading}
      >
        {isLoading ? 'Waiting...' : 'Generate Fixtures'}
      </button>
    </div>
  );
};

export default FixtureGenerator;
