import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import config from "../config";
import { getBotResponse } from "../utils/chatbotResponses";
import "./Chatbot.css";

const QUICK_REPLIES = [
    "Give me a tour!",
    "What are your interests?",
    "Show me your projects.",
    "Tell me about UMass.",
    "Experience at TangoEye?",
    "Tell me about ER Room Predictor",
];

const TOUR_STEPS = [
    {
        hash: "#home",
        text: "Welcome! This is my scrapbook-style portfolio. Let's take a quick tour.",
    },
    {
        hash: "#experience",
        text: "Here's my work experience — CV internships at TangoEye & Kyrotics, research at DARoS Lab, and more.",
    },
    {
        hash: "#projects",
        text: "These are my featured projects — each one links to GitHub!",
    },
    {
        hash: "#skills",
        text: "My tech stack — Python, YOLOv8, React, OpenCV, and more.",
    },
    {
        hash: "#contact",
        text: "Want to reach out? Email, phone, LinkedIn, or GitHub — all here!",
    },
    {
        hash: "#home",
        text: "That's the tour! Thanks for stopping by — feel free to connect!",
    },
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: `Hey! I'm ${config.meta.author.split(" ")[0]}'s assistant. Ask me anything or pick a button below!`,
        },
    ]);
    const [input, setInput] = useState("");
    const [isTouring, setIsTouring] = useState(false);
    const [tourText, setTourText] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const addMessage = (sender, text) => {
        setMessages((prev) => [...prev, { sender, text }]);
    };

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const startTour = async () => {
        setIsOpen(false);
        setIsTouring(true);

        await delay(400);
        for (const step of TOUR_STEPS) {
            window.location.hash = step.hash;
            setTourText(step.text);
            await delay(3500);
        }

        setIsTouring(false);
        setTourText("");
    };

    const handleReply = async (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        addMessage("user", trimmed);
        setInput("");

        const response = getBotResponse(trimmed);
        await delay(400);

        if (response === "__TOUR__") {
            addMessage("bot", "Starting a tour of the portfolio — follow along!");
            await delay(800);
            startTour();
        } else if (response) {
            addMessage("bot", response);
        } else {
            addMessage(
                "bot",
                "Hmm, I'm not sure about that one! Try a quick-reply button below, or reach out via the Contact section."
            );
        }
    };

    const handleSend = () => handleReply(input);

    return (
        <>
            {isTouring && (
                <div className="chatbot-tour-banner" role="status">
                    <div className="tape tape-top" />
                    <p className="font-hand text-xl text-[var(--ink)]">
                        {tourText}
                    </p>
                </div>
            )}

            <div
                className={`chatbot-container ${isOpen ? "open" : "closed"}`}
            >
                {isOpen && (
                    <div className="chatbot-box">
                        <div className="chatbot-header">
                            <div className="tape tape-top-left" />
                            <div>
                                <p className="chatbot-header-title">
                                    ask me anything!
                                </p>
                                <p className="chatbot-header-sub">
                                    {config.meta.author}'s assistant
                                </p>
                            </div>
                            <button
                                className="chatbot-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="chatbot-messages">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`chatbot-msg ${msg.sender}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chatbot-quick-buttons">
                            {QUICK_REPLIES.map((btn) => (
                                <button
                                    key={btn}
                                    onClick={() => handleReply(btn)}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>

                        <div className="chatbot-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleSend()
                                }
                                placeholder="Type a message..."
                            />
                            <button
                                onClick={handleSend}
                                aria-label="Send message"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                )}

                <button
                    className="chatbot-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
                </button>
            </div>
        </>
    );
};

export default Chatbot;
