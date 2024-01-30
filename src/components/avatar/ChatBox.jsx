import { useState, useContext } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import fetchOpenAi from "../../service/fetchOpenAi.js";
import { assistantPrompt } from "../../helper/promptFactory.js";
import { useInputPipeline } from "../../helper/hooks/useInputPipeline.js";
import Colors from "../../helper/Colors.js";
import ChatSuggestions from "./ChatSuggestions.jsx";
import { FaHandSparkles } from "react-icons/fa";
import { AvatarContext } from "./Avatar.jsx";
import '../../assets/special.css';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative; /* Needed for absolute positioning of the overlay */
    z-index: 10;
    @media (max-width: 600px) {
        width: 75%;
    }
`;

const TextAreaContainer = styled.div`
  height: 1.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  width: 29rem;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.lightGray};
  border-radius: 25px;
  @media (max-width: 600px) {
    margin-top: .5rem;
    width: 100%;
    // height: 1.25rem;
    padding: 1.25rem;
  }
`;

const MyTextArea = styled.textarea`
  height: 1.75rem;
  width: 29rem;
  padding-right: 2rem;
  box-sizing: border-box;
  border: 0;
  background-color: ${Colors.offWhite};
  color: ${Colors.black};
  resize: none;
  outline: none;
@media (max-width: 600px) {
    font-size: 12px;
    width: 100%;
    // height: 1.25rem;
}
`;

const SendButton = styled(FaHandSparkles)`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${Colors.black};
  cursor: pointer;
`;
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
        <Container>
            <div style={overlayStyle} />
            <ChatSuggestions setMyInputText={setMyInputText} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
            <TextAreaContainer>
                <MyTextArea 
                    className="scrollableContent"
                    placeholder="Type here..."
                    value={myInputText} 
                    onChange={handleInputText} 
                    onKeyDown={handleKeyDown}
                />
                {myInputText !== '' && (
                    <SendButton onClick={handleSendInput} size={30} />
                )}
            </TextAreaContainer>
        </Container>
    )
}

const styles = {
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
}
export default ChatBox

