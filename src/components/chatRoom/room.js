import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./room.css";
import Chat from "./chat";
import axios from "axios";

export const Room = () => {
  const [socket, setSocket] = useState(null);
  const room = "efootball-group";
  const [showChat, setShowChat] = useState(false);
  const [usernamee, setUsername] = useState(""); 
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/profile/${userId}/profile/${userId}`
        );
       
     
        setUsername(response.data.userName); 
      } catch (error) {
        console.log(error);
       
      }
    };

    if (userId) {
      fetchProfile();
    } 
  }, []);


  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:3001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (usernamee !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="room">
      <div className="chats">
        {!showChat ? (
          <div>
            <div>
              <input
                type="text"
                name=""
                placeholder="Charles..."
                value={usernamee}
                readOnly
              />
              <input type="text" name="" value={room} readOnly />
              <button onClick={joinRoom}>Join the Room</button>
            </div>
          </div>
        ) : (
          <Chat socket={socket} username={usernamee} room={room} />
        )}
      </div>
    </div>
  );
};
