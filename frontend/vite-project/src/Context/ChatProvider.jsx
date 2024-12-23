import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Update this line to use useNavigate
import axios from "axios"; // Assuming axios is used for API requests

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const navigate = useNavigate(); // Replace history with navigate

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/"); // Redirect to login page if no user
    } else {
      fetchChats(userInfo.token); // Fetch chats when user info is available
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const fetchChats = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/chats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChats(response.data); // Store chats in state
    } catch (error) {
      console.error("Failed to fetch chats", error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
