import {useState, useContext, useEffect} from "react";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../helper/hooks/useSpeakSelectedText";
import { useStartSession } from "../helper/hooks/AvatarVideoControls.js";
import Colors from "../helper/Colors.js";

const TriggerStart = () => {
    const [clicked, setClicked] = useState(false);
    const {sessionStarted} = useContext(AvatarContext);
    const speakText = useSpeakSelectedText();
    const startSession = useStartSession()
    

    useEffect(() => {
        if (sessionStarted) {
            speakText("Hi, welcome.")
        }
    }, [sessionStarted])

    return (
        <>
            {!clicked && (
                <p 
                    style = {{cursor: "pointer", color: Colors.gray, fontSize: 14, font: "Inter Variable", opacity: .3 }} 
                    onClick={() => {setClicked(true); startSession()}}>
                    Click here to begin
                </p>
            )} 
        </>
    )
}

export default TriggerStart