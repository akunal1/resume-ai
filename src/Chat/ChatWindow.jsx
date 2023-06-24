import React from 'react';
import './ChatWindow.css';
 
 
const ChatWindow = ({ messages, handleMessage, handleClose }) => (
  <div className="chat-window">
    <div className="chat-header">
      <h4>Chat</h4>
      <button className="close-button" onClick={handleClose}>
      <i className="las la-window-close la-2x" />
      </button>
    </div>
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <p key={index} className={msg.role}>
          <strong>{msg.role === 'bot' ? 'Bot: ' : 'User: '}</strong>
          {msg.content}
        </p>
      ))}
    </div>
    <div className="chat-input-container">
      <input 
        type="text" 
        className="chat-input" 
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            handleMessage(event.target.value);
            event.target.value = '';
          }
        }} 
      />
      <div className="send-button" onClick={(event) => {
          handleMessage(event.target.previousSibling.value);
          event.target.previousSibling.value = '';
      }}>
        {/* <i className="lar la-paper-plane la-2x" /> */}
        Send
      </div>
    </div>
  </div>
);

export default ChatWindow;
