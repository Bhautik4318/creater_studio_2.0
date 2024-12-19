import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatArea: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setIsLoading(true);

      try {
        // Replace this logic with your actual API call
        const botResponse = `Echo: ${input}`;
        setMessages((prev) => [
          ...prev,
          { text: botResponse, sender: 'bot' },
        ]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { text: 'Something went wrong.', sender: 'bot' },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="h-screen flex-1 flex flex-col">
      {/* Messages Section */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.length === 0 ? (
          <p className="text-gray-500">Start the conversation...</p>
        ) : (
          <div className="space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white self-end text-right w-full'
                    : 'bg-gray-300 text-black self-start'
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center py-4">
                <div className="w-6 h-6 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="fixed bottom-0 w-full p-2">
        <form className="max-w-sm mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Prompt"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
