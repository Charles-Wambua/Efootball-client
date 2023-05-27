import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FixtureGenerator from './generateFixtures';
// import "./css/Displayfixtures"

const App = () => {
  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   fetchPlayers();
  // }, []);

  // const fetchPlayers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/profiles/profiles'); // Replace with your actual API endpoint

  //     setPlayers(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
    // <div>
    //   <h1>Fixture Generator</h1>
    //   {players.length > 0 ? (
    //     <FixtureGenerator players={players} />
    //   ) : (
    //     <p>Loading players...</p>
    //   )}
    // </div>
  // );
};

export default App;
