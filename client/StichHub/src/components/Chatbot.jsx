import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa"; // Importing required icons
import axios from "axios";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track whether the chat is open or not

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev); // Toggle the chat state
  };

  const [messages, setMessages] = useState([
    { text: "Hello, Welcome to stichhub", isUser: false },
    { text: "Let's begin the conversation", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");

      try {
        const options = {
          method: "POST",
          url: "https://chatgpt-api8.p.rapidapi.com/",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "d58ee775d9msheeda9934d9d071dp1bdcf0jsnb0cbcde29069",
            "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
          },
          data: [
            {
              content: inputValue,
              role: "user",
            },
          ],
        };

        const response = await axios.request(options);

        const generatedText = response.data.text;

        if (generatedText) {
          const responseMessage = { text: generatedText, isUser: false };
          setMessages((prevMessages) => [...prevMessages, responseMessage]);
        }
      } catch (error) {
        console.error("API request failed:", error);
        const errorMessage = {
          text: "Sorry, an error occurred. Please try again later.",
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  return (
    <div
      className={`font-semibold fixed bottom-4 right-4 max-w-sm w-full ${
        isChatOpen
          ? "bg-white border border-gray-300 rounded-lg shadow-lg"
          : "bg-transparent shadow-none"
      } `}
    >
      {/* Chat Icon to open the chat */}
      {!isChatOpen && (
        <div className="p-4 ml-[90%]" onClick={toggleChat}>
          <FaCommentDots size={24} color="gray" />
        </div>
      )}

      {/* Close Button to hide the chat */}
      {isChatOpen && (
        <div className="p-4" onClick={toggleChat}>
          <FaTimes size={24} color="gray" />
        </div>
      )}

      {/* Chat messages */}
      {isChatOpen && (
        <div className="p-4 h-56 overflow-y-auto overflow-x-hidden">
          {messages.map((message, index) => (
            <div
              key={index+Math.random() * (10-1) + 1}
              className={`p-1 rounded-lg w-[55%] mb-2 ${
                message.isUser
                  ? "bg-blue-500 text-white self-start w-[55%] ml-[10rem]"
                  : "bg-gray-200 text-gray-800 self-end"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Chat input form */}
      {isChatOpen && (
        <form className="p-4 flex" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="flex-grow border text-black border-gray-300 text-[15px] rounded-l-lg px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Chatbot;
