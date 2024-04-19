import React from "react";
import "./ChatWindow.css";

const ChatWindow = ({ messages, handleMessage, handleClose }) => (
  <div className="chat-window">
    <div className="chat-header">
      <h5>Chat with AI Assistant</h5>
      <button className="close-button" onClick={handleClose}>
        <i className="las la-window-close la-2x" />
      </button>
    </div>
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            backgroundColor: msg.role === "bot" ? "lightgreen" : "lightblue",
            marginBottom: 2,
            marginLeft: msg.role === "bot" ? 0 : 8,
            marginRight: msg.role === "bot" ? 8 : 0,

            padding: "4px 8px",
            borderRadius: 8,
            // display: "flex", // Set display to flex to enable flex properties
            // flexDirection: "row", // This will now take effect
            // justifyContent: msg.role === "bot" ? "left" : "right",
            textAlign: msg.role === "bot" ? "left" : "right",
          }}
        >
          {/* <strong>{msg.role === "bot" ? "Avinash: " : "You: "}</strong> */}
          {msg.content}
        </div>
      ))}
    </div>
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleMessage(event.target.value);
            event.target.value = "";
          }
        }}
      />
      <div
        className="send-button"
        onClick={(event) => {
          handleMessage(event.target.previousSibling.value);
          event.target.previousSibling.value = "";
        }}
      >
        {/* <i className="lar la-paper-plane la-2x" /> */}
        Send
      </div>
    </div>
  </div>
);

export default ChatWindow;
