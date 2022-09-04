/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const handleMessage = (message) => {
    setMessages((prevMessages) => prevMessages.concat([message]));
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 5000);
  };

  return (
    <MessageContext.Provider value={{ messages, handleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
