import {useState, useContext, useEffect} from "react";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../../helper/hooks/useSpeakSelectedText.js";
import { useStartSession } from "../../helper/hooks/AvatarVideoControls.js";
import Colors from "../../helper/Colors.js";
import { greetingPrompt } from "../../helper/promptFactory.js";
import fetchOpenAi from "../../service/fetchOpenAi.js";

const TriggerStart = () => {
    const [clicked, setClicked] = useState(false);
    const {sessionStarted, setChatState} = useContext(AvatarContext);
    const speakText = useSpeakSelectedText();
    const startSession = useStartSession()
    const [greetingText, setGreetingText] = useState("Hi, I'm Mae, Will's AI professional advocate. How can I help you?");
    

    useEffect(() => {
        if (sessionStarted) {
            // const async = async () => {
            //     const prompt = [
            //         {"role": "system", "content": greetingPrompt()},
            //     ];
            //     var response = await fetchOpenAi({chatHistory: prompt});
            //     console.log("TriggerStart.jsx response___", response);
            //     speakText(response);
            // }
            // async();
            speakText(greetingText);
        };
    }, [sessionStarted]);

    const handleStartSession = async () => {
        setClicked(true);
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
        return response;
    }

    return (
        <>
            {!clicked && (
                <p 
                style = {{
                    position: 'fixed',
                    top: '50%', /* Center vertically */
                    left: '50%', /* Center horizontally */
                    transform: 'translate(-50%, -50%)', // Corrected line
                    cursor: "pointer", 
                    color: Colors.gray, 
                    fontSize: 16, 
                    font: "Inter Variable", 
                    opacity: .35, 
                    zIndex: 101,
                }} 
                onClick={handleStartSession}
                >
                    Wondering if you should hire me or contract me for a project?<br/>
                    Click here to talk to Maye.<br/>
                    {/* She’s been designed to represent me and showcase my skills and accomplishments */}

                    {/* She's my AI Professional Representative. */}

                </p>
            )} 
        </>
    )
}

export default TriggerStart