import React from "react";
import "./ChatButton.css";

const ChatButton = ({ handleClick }) => (
  <button className="chat-button" onClick={handleClick}>
   <i className="las la-comments" />
  </button>
 
);

export default ChatButton;
