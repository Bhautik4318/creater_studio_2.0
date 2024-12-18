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
                    ? 'bg-blue-500 text-white self-end'
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
      <div className="fixed bottom-0 w-5/6 p-4 border-t bg-white">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 p-2 border rounded-l-lg focus:outline-none text-black"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
