import React, { useEffect, useState } from "react";
import "./css/table.css";

export const EplTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    // fetch("http://localhost:3001/get-results/get-results")
    fetch("https://efootball-api.onrender.com/get-results/get-results")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error fetching table data:", error);
      });
  }, []);

  return (
    <div>
      <div className="epl-table">
        <div className="top-season">
          <h3>On Going Season 1, 2023</h3>
          <p>
            Make haste and register for oncoming league, only 20 teams, and we
            kick off
          </p>
          <p>
            link to <a href="/register-league">Register</a> click
          </p>
          <p>Welcome to the Sport!</p>
        </div>
        <div className="table-header">
          <div className="column">Position</div>
          <div className="column">Team</div>
          <div className="column">P</div>
          <div className="column">W</div>
          <div className="column">D</div>
          <div className="column">L</div>
          <div className="column">GF</div>
          <div className="column">GA</div>
          <div className="column">GD</div>
          <div className="column">Pts</div>
        </div>
        <div className="table-body">
          {tableData
            .sort((a, b) => a.rank - b.rank) // Sort the tableData array based on the rank
            .map((team) => (
              <div className="table-row" key={team.position}>
                <div className="column">{team.rank}</div>
                <div className="columnn">{team.team}</div>
                <div className="column">{team.played}</div>
                <div className="column">{team.won}</div>
                <div className="column">{team.drawn}</div>
                <div className="column">{team.lost}</div>
                <div className="column">{team.goalsFor}</div>
                <div className="column">{team.goalsAgainst}</div>
                <div className="column">{team.goalDifference}</div>
                <div className="column">{team.points}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
