import React, { useState } from "react";

const Chatbot = () => {
  const [open, setopen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello,Welcome to stichhub", isUser: false },
    { text: "Let's begin the conversation", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  let API_TOKEN = "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";
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      let responseMessage;
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/satvikag/chatbot",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Access-Control-Allow-Origin": "*",
            },

            method: "POST",
            body: JSON.stringify(inputValue),
          }
        );
        const result = await response.json();
        const generatedText = result.generated_text;
        console.log(generatedText);
        responseMessage = { text: generatedText, isUser: false };
      } catch (error) {
        console.error("API request failed:", error);
        responseMessage = {
          text: "Sorry, an error occurred. Please try again later.",
          isUser: false,
        };
      }

      const newMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");

      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }
  };

  return (
    <div className="">
      <div
        className={`${open ? "hidden" : "fixed"} text-white bottom-4 right-4`}
        onClick={() => {
          setopen(!open);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4l-2-2" />
          <path d="M12 8V7" />
          <path d="M16 12h2" />
          <path d="M6 12h2" />
        </svg>
      </div>
      <div
        className={`${
          !open ? "hidden" : "fixed"
        } font-semibold  bottom-4 right-4 max-w-sm w-80 bg-white border border-gray-300 rounded-lg shadow-lg`}
      >
        <button
          className="absolute top-2 right-2 bg-gray-300 text-gray-700 rounded-full p-1"
          onClick={() => {
            setopen(!open);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 20a10 10 0 100-20 10 10 0 000 20zm1-12.586L15.95 5.95l1.414 1.414L12.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L7.586 10 2.636 5.05l1.414-1.414L10 8.586l4.95-4.95 1.414 1.414L12.414 10l4.95 4.95-1.414 1.414L10 13.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="p-4 h-40 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg w-[70%] mb-2 ${
                message.isUser
                  ? "bg-blue-500 text-black self-start w-[70%] ml-[10rem]"
                  : "bg-gray-200 text-gray-800 self-end"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
        </div>
        <form className="p-4 flex" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="w-[4rem] text-lg flex-grow border text-black border-gray-300 rounded-l-lg px-4 py-1 focus:outline-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-xl text-black px-4 py-1 rounded-r-lg ml-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
