import { useState, useContext } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import fetchOpenAi from "../../service/fetchOpenAi.js";
import { assistantPrompt } from "../../helper/promptFactory.js";
import { useInputPipeline } from "../../helper/hooks/useInputPipeline.js";
import Colors from "../../helper/Colors.js";
import ChatSuggestions from "./ChatSuggestions.jsx";
import { FaHandSparkles } from "react-icons/fa";
import { AvatarContext } from "./Avatar.jsx";
import '../../assets/ChatBox.css';

const ChatBox = () => {
    const [myInputText, setMyInputText] = useState("");
    const [chatHistory, setChatHistory] = useState([
        {"role": "system", "content": assistantPrompt()},
    ]);
    const inputPipeline = useInputPipeline({chatHistory, setChatHistory});
    const { inProgress } = useContext(AvatarContext);

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

    const overlayStyle = {
        ...styles.overlay,
        opacity: inProgress ? 0.8 : 0, // Control the opacity based on inProgress
        pointerEvents: inProgress ? 'auto' : 'none', // Enable or disable pointer events based on inProgress
    };
    
    return (
        <div style={{...styles.myTextAreaContainer, position: 'relative'}}>
            <div style={overlayStyle} />
            <ChatSuggestions setMyInputText={setMyInputText} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
            <div style={{marginTop: "2rem", display: "flex", width: "35rem", position: "relative", alignItems: "center", justifyContent: "center"}}>
                <textarea 
                    className="myTextArea"
                    placeholder="Type here..."
                    style={styles.myTextArea} 
                    value={myInputText} 
                    onChange={handleInputText} 
                    onKeyDown={handleKeyDown}
                />
                {(myInputText !== '') && (<FaHandSparkles onClick={handleSendInput} size={30} style={styles.sendButton}/>)}
            </div>
        </div>
    )
}

const styles = {
    myTextAreaContainer: {
        marginTop: '0rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative', // Needed for absolute positioning of the overlay
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.offWhite,
        opacity: 0.8, // Adjust for desired overlay opacity
        transition: 'opacity 2s ease-in-out',
        zIndex: 100, // Ensure it's above other content
    },
    myTextArea: {
        height: '3rem',
        lineHeight: '3rem',
        width: '29rem', //container width - padding
        borderRadius: '25px',
        paddingLeft: '2rem',
        paddingRight: '4rem',
        // paddingTop: '5px',
        // paddingBottom: '5px',
        borderColor: Colors.lightGray,
        backgroundColor: Colors.offWhite,
        color: Colors.warmBlack,
        overflow: 'hidden',
        resize: 'none',
        outline: 'none',
    },
    sendButton: {
        position: 'absolute',
        right: '3.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: Colors.black,
        cursor: 'pointer',
    },
}
export default ChatBox

