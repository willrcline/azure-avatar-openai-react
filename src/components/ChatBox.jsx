import { useState, useContext } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import fetchOpenAi from "../service/fetchOpenAi";
import { assistantPrompt } from "../helper/promptFactory";
import { useInputPipeline } from "../helper/hooks/useInputPipeline";
import Colors from "../helper/Colors.js";
import ChatSuggestions from "./ChatSuggestions.jsx";
import { FaHandSparkles } from "react-icons/fa";

const ChatBox = () => {
    const [myInputText, setMyInputText] = useState("");
    const [chatHistory, setChatHistory] = useState([
        {"role": "system", "content": assistantPrompt()},
    ]);
    const inputPipeline = useInputPipeline({chatHistory, setChatHistory});

    const getAiText = async () => {
        console.log("ChatBox.jsx getAiText prompt___", prompt);
        var text = await fetchOpenAi({"prompt": prompt });
        return text
    }

    const handleSendInput = async () => {
        setMyInputText("");
        inputPipeline(myInputText);
    };
    
    
    const handleInputText = (event) => {
        setMyInputText(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendInput();
        }
    }
    
    return (
        <div style={styles.myTextAreaContainer}>
            <ChatSuggestions setMyInputText={setMyInputText} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
            <div style={{position: "relative", display: "flex", width: "35rem"}}>
                <textarea 
                    style={styles.myTextArea} 
                    value={myInputText} 
                    onChange={handleInputText} 
                    onKeyDown={handleKeyDown} // Add this line
                />
                {(myInputText !== '') && (<FaHandSparkles onClick={handleSendInput} size={30} style={styles.sendButton}/>)}
            </div>
        </div>
    )
}


const styles = {
    myTextAreaContainer: {
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    myTextArea: {
        height: '3rem',
        width: '35rem',
        borderRadius: '25px',
        padding: '10px',
        paddingRight: '70px',
        borderColor: Colors.lightGray,
        backgroundColor: Colors.offWhite,
        color: Colors.warmBlack,
        overflow: 'hidden',
        resize: 'none',
        outline: 'none',
    },
    sendButton: {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: Colors.black,
        cursor: 'pointer',
    },
}
export default ChatBox

