"use client"
import React from 'react';
import './style.css';
import './chat.css';

function Chat() {

    const [input, setInput] = React.useState<string>("");
    const [messages, setMessages] = React.useState<string[]>([]);

    // Context to store the messages
    const MessageContext = React.createContext(
        {
            messages: [] as string[],
            sendMessage: () => {},
            handleChange: (event: { target: { value: React.SetStateAction<string>; }; }) => {}
        }
    );

    // Function to send the message
    const sendMessage = () => {

        const message_input = document.getElementById('message_input');
        if (!message_input) {
            return;
        }
        const input = message_input.value;
        if (!input) {
            return;
        }
        setMessages([...messages, input] as string[]);
        setInput('');
    };

    // Function to handle the input change
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(event.target.value);
    };

    // Function to handle the key press
    const onKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    // Component to display the chat header
    const ChatHeader = () => {
        return (
            <header id="">
                <h1>Chat</h1>
            </header>
        );
    };

    // Component to display the messages
    const Messages = () => {
        return (
            <main id="chat_messages">
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </main>
        );
    };

    // Component to display the chat footer
    const ChatFooter = () => {
        return (
            <footer>
                <input
                    type="text"
                    id="message_input"
                    autoFocus
                />
                <button onClick={sendMessage}>Send</button>
            </footer>
        );
    };

    // UseEffect to scroll to the bottom of the chat
    React.useEffect(() => {
        const chat = document.getElementById('chat_messages');
        if (!chat) {
            return;
        }
        chat.scrollTop = chat.scrollHeight;
    }, [messages]);

    // UseEffect to focus on the input field
    React.useEffect(() => {
        const message_input = document.getElementById('message_input');
        if (!message_input) {
            return;
        }
        message_input.focus();
    }, []);

    // UseEffect to handle the key press
    React.useEffect(() => {
        window.addEventListener('keypress', onKeyPress);
        return () => {
            window.removeEventListener('keypress', onKeyPress);
        };
    });

    return (
        <MessageContext.Provider value={{ messages, sendMessage, handleChange }}>
            <main id="chat_component">
                <ChatHeader />
                <Messages />
                <ChatFooter />
            </main>
        </MessageContext.Provider>
    );
}


export default function Home() {
    return (<Chat />);
}
