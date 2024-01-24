import { useState, useContext } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import fetchOpenAi from "../service/fetchOpenAi";
import { assistantPrompt } from "../helper/promptFactory";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../helper/hooks/useSpeakSelectedText";
import Colors from "../helper/Colors.js";
import ChatSuggestions from "./ChatSuggestions.jsx";

const ChatBox = () => {
    const [mySpeechText, setMySpeechText] = useState("");
    const {avatarSynthesizer, myAvatarAudioEleRef} = useContext(AvatarContext);
    const speakText = useSpeakSelectedText();

    const getAiText = async () => {
        var prompt = assistantPrompt({"text": mySpeechText});
        console.log("ChatBox.jsx getAiText prompt___", prompt);
        var text = await fetchOpenAi({"prompt": prompt })
        return text
    }

    const handleStartSpeak = async () => {
        console.log("ChatBox.jsx handleStartSpeak___")
        var text = await getAiText();
        console.log("ChatBox.jsx handleStartSpeak text___", text);
        speakText(text);
    }

    const handleSpeechText = (event) => {
        setMySpeechText(event.target.value);
    }

    const stopSpeaking = () => {
        avatarSynthesizer.stopSpeakingAsync().then(() => {
          console.log("[" + (new Date()).toISOString() + "] Stop speaking request sent.")
    
        }).catch();
    }  

    
    return (
            <div style={styles.myTextAreaContainer}>
                <ChatSuggestions />
                <div style={{position: "relative"}}>
                    <textarea style={styles.myTextArea} value={mySpeechText} onChange={handleSpeechText}>

                    </textarea>
                    <button style={styles.sendButton} onClick={handleStartSpeak}>
                        Speak
                    </button>
                </div>
                <div className="myButtonGroup d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={stopSpeaking}>
                        Stop
                    </button>
                </div>
            </div>
    )
}


const styles = {
    myTextAreaContainer: {
        marginTop: '5rem',
    },
    myTextArea: {
        height: '4rem',
        width: '35rem',
        borderRadius: '25px',
        padding: '10px',
        paddingRight: '70px',
        borderColor: Colors.lightGray,
        backgroundColor: Colors.offWhite,
        color: Colors.warmBlack,
    },
    sendButton: {
        position: 'absolute',
        right: '1rem',
    },
}
export default ChatBox

