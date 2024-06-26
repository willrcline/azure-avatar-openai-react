import {useState, useContext, useEffect} from "react";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../../helper/hooks/useSpeakSelectedText.js";
import { useStartSession } from "../../helper/hooks/AvatarVideoControls.js";
import Colors from "../../helper/Colors.js";
import { greetingPrompt } from "../../helper/promptFactory.js";
import fetchOpenAi from "../../helper/fetch/fetchOpenAi.js";
const TriggerStart = ({startBtnClicked, setStartBtnClicked}) => {
    const {sessionStarted, setChatState} = useContext(AvatarContext);
    const speakText = useSpeakSelectedText();
    const startSession = useStartSession()
    const [greetingText, setGreetingText] = useState("Hi, I'm Mae, Will's AI professional advocate. How can I help you?");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (sessionStarted) {
            speakText(greetingText);
        };
    }, [sessionStarted]);

    const handleStartSession = async () => {
        setStartBtnClicked(true);
        startSession();
        setChatState("loading");
        var text = await fetchGreetingText();
        setGreetingText(text)
    }

    const fetchGreetingText = async () => {
        const prompt = [
            {"role": "system", "content": greetingPrompt()},
        ];
        var response = await fetchOpenAi({chatHistory: prompt});
        console.log("TriggerStart fetchGreetingText response___", response)
        return response;
    }

    return (
        <>
            {!startBtnClicked && (
                <div 
                style={{
                    position: 'fixed',
                    top: '50%', /* Center vertically */
                    left: '50%', /* Center horizontally */
                    transform: 'translate(-50%, -50%)', // 
                    zIndex: 101,
                    maxWidth: "35rem",
                }}>
                    <p style={{
                        color: Colors.black,
                        fontSize: 30,
                        // lineHeight: "1.5rem",
                        fontFamily: 'Inter',
        fontWeight: 500,
                        textAlign: "justify",
                        // fontWeight: 700,
                        // opacity: .35,
                        marginBottom: "2.5rem",
                    }}> 
                    Wondering if you should hire me or contract me for a project?
                    </p>
                    <p style={{
                        color: Colors.black,
                        fontSize: 20,
                        // lineHeight: "1.5rem",
                        fontFamily: 'Inter',
        fontWeight: 400,
                        textAlign: "justify",
                        // fontWeight: 500,
                        // opacity: .35,
                        marginBottom: "2.5rem",
                    }}> 
                    This simulation has been designed to represent me and showcase my skills and accomplishments in a unique and interactive way. 
                    </p>
                    <p 
                    style = {{
                        cursor: "pointer", 
                        color: Colors.darkGray, 
                        fontSize: 16, 
                        fontFamily: 'Inter',
        fontWeight: 400, 
                        // opacity: isHovered ? 0.5 : 0.35, 
                        zIndex: 101,
                    }} 
                    onClick={handleStartSession}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                        Click here to Begin.<br/>

                        {/* She's my AI Professional Representative. */}

                    </p>
                </div>
            )} 
        </>
    )
}

export default TriggerStart