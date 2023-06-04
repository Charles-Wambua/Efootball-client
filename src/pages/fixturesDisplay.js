import React, { useEffect, useState } from "react";
import axios from "axios";
import FixtureGenerator from "./generateFixtures";
import "./css/showFixtures.css";

const FixturesDisplay = ({ fixtures }) => {
  return (
    <div className="fixtures">
      {fixtures.length > 0 && (
        <div>
          <h2 className="fixtures-heading">Fixtures:</h2>
          {fixtures.map((round, index) => (
            <div className="round" key={index}>
              <h3>Round {index + 1}</h3>
              {round.matches.map((match, matchIndex) => (
                <p className="match" key={matchIndex}>
                  <span className="homePlayer">
                    {match.homePlayer} ({match.homeScore !== null ? match.homeScore : "closed"})
                  </span>{" "}
                  <span className="vs">vs</span>{" "}
                  <span className="awayPlayer">
                    {match.awayPlayer} ({match.awayScore !== null ? match.awayScore : "closed"})
                  </span>
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FixturesDisplay;
