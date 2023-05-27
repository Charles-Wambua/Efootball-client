import React, { useEffect, useState } from "react";
import "./chat.css";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    if (socket) {
      const receiveMessage = (data) => {
        setMessageList((list) => [...list, data]);
        showNotification(data);
      };

      socket.on("receive_message", receiveMessage);

      return () => {
        socket.off("receive_message", receiveMessage);
      };
    }
  }, [socket]);

  const showNotification = (messageData) => {
    if (Notification.permission === "granted") {
      new Notification("New Message", {
        body: `New message from ${messageData.author}`,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("New Message", {
            body: `New message from ${messageData.author}`,
          });
        }
      });
    }
  };

  return (
    <div className="chatapp">
      <div className="header">
        {/* <p>Live Chat</p> */}
      </div>
      <div className="chatbody">
        <ScrollToBottom className="message-list">
          {messageList.map((messageContent) => {
            const isSender = username === messageContent.author;

            return (
              <div className="message" id={username === messageContent.author ? "you" : "other"}>
                <div>
                  <div className="message-content">
                    <h3>{messageContent.message}</h3>
                  </div>
                  <div className="message-meta">
                    <p id="time">@{messageContent.author}</p>
                    <p id="author">{messageContent.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chatfooter">
        <input
          type="text"
          name=""
          value={currentMessage}
          placeholder="Type message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
