'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatBot() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const chatRef = useRef(null);
  const iconRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const handleSend = async () => {
    if (!message) return;
    const userMsg = { role: 'user', text: message };
    setChatLog((prev) => [...prev, userMsg]);
    setMessage('');
    setLoading(true);

    const res = await fetch('/api/gemini-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    const botMsg = { role: 'bot', text: data.reply };
    setChatLog((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  // Simple draggable icon
  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const handleMouseDown = (e) => {
      pos.current = {
        x: e.clientX - icon.offsetLeft,
        y: e.clientY - icon.offsetTop,
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      icon.style.left = `${e.clientX - pos.current.x}px`;
      icon.style.top = `${e.clientY - pos.current.y}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    icon.addEventListener('mousedown', handleMouseDown);
    return () => {
      icon.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-5 w-[320px] bg-white rounded-2xl shadow-2xl z-50 p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-700">Chat with me</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-[250px] overflow-y-auto flex flex-col gap-2 pr-1">
            {chatLog.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-400 italic text-left">Bot is typing...</div>
            )}
          </div>

          {/* Input Box */}
          <div className="mt-3 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded-full outline-none text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <div
        ref={iconRef}
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 z-50 hover:scale-105 transition-transform duration-200 "
        title="Chat with me"
      >
        <MessageCircle size={30} />
      </div>
    </>
  );
}
