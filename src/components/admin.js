import { useEffect, useState } from "react";
import FixtureGenerator from "../pages/generateFixtures";
import "./css/admin.css";
import axios from "axios";

export const Admin = () => {
  const [registeredPlayers, setRegisteredPlayers] = useState([]);
  const [approvedregisteredPlayers, setApprovedRegisteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://efootball-api.onrender.com/register-league/get-registeredPlayers"
        );
        setRegisteredPlayers(response.data.registeredPlayers);

        const approvedResponse = await axios.get(
          "https://efootball-api.onrender.com/register-league/get-approvedPlayers"
        );
        setApprovedRegisteredPlayers(approvedResponse.data.approvedPlayers);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApproveRegistration = async (playerId) => {
    try {
      await axios.post(
        `https://efootball-api.onrender.com/register-league/approve-registration/${playerId}`
      );

      const updatedPlayers = registeredPlayers.map((player) => {
        if (player._id === playerId) {
          return { ...player, status: "Approved" };
        }
        return player;
      });
      const approvedPlayer = registeredPlayers.find((player) => player._id === playerId);


      setRegisteredPlayers(updatedPlayers);
      setApprovedRegisteredPlayers((prevPlayers) => [...prevPlayers, approvedPlayer]);

    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="admin">
      <h3>Admin page</h3>
      <div className="mmm">
        <FixtureGenerator />
      </div>
      <div className="mmm">
        {registeredPlayers.map((player) => (
          <div key={player._id} className="">
            <div className="name">{player.username}</div>
            <div className="phone">{player.phoneNumber}</div>
            {player.status === "Approved" ? (
              <div className="status">Approved</div>
            ) : (
              <button
                onClick={() => handleApproveRegistration(player._id)}
                className="approve-button"
              >
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mmm">
        {approvedregisteredPlayers.map((player) => (
          <div key={player._id} className="">
            <div className="name">{player.username}</div>
            <div className="phone">{player.phoneNumber}</div>
            <div className="status">Approved</div>
          </div>
        ))}
      </div>
    </div>
  );
};
