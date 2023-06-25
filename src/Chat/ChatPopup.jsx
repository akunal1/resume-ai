import React, { useState } from 'react';
import axios from 'axios';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

import ME from './MyData.json';

const ChatPopup = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleClose = () => setIsChatOpen(false);

  const handleMessage = async (msg) => {
    if (msg.trim() !== '') {
      const userMessage = { role: 'user', content: msg.trim() };
      setMessages([...messages, userMessage]);

      try {
 
        const apiKey = process.env.REACT_APP_API_KEY;

          const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: "gpt-3.5-turbo", 
              messages: [
                {
                  role: "system",
                  content: "Avinash"
                },
                {
                  role: "user",
                  content: `your instructions are : ${ME.instruction}. use provide data to answer the any question :  ${ME.data} , ${ME.aboutMe} , ${ME.experience} ,${ME.projects} ,${ME.proud} ,${ME.tech} ,${ME.education} . Answer to  below question(try to answer as short as possible) in english language. And remember that you can't use any data outside the provided data by me : Question is : \n ${msg}`
                }
              ],
            },
            {
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
            }
          );
        
 
          
        const botMessage = { role: 'bot', content: response.data.choices[0].message.content}; 
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {isChatOpen ? (
        <ChatWindow messages={messages} handleMessage={handleMessage} handleClose={handleClose} />
      ) : (
        <ChatButton handleClick={toggleChat} />
      )}
    </>
  );
};

export default ChatPopup;
