import {useState, useContext, useEffect} from "react";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../../helper/hooks/useSpeakSelectedText.js";
import { useStartSession } from "../../helper/hooks/AvatarVideoControls.js";
import Colors from "../../helper/Colors.js";
import { greetingPrompt } from "../../helper/promptFactory.js";
import fetchOpenAi from "../../service/fetchOpenAi.js";

const Placeholder = () => {
    return (
        <p 
        style = {{
            position: 'fixed',
            top: '50%', /* Center vertically */
            left: '50%', /* Center horizontally */
            transform: 'translate(-50%, -50%)', // Corrected line
            cursor: "pointer", 
            color: Colors.gray, 
            fontSize: 14, 
            font: "Inter Variable", 
            opacity: .3, 
            zIndex: 101,
        }} 
        >
            This AI magic on this page cannot be viewed on a mobile device. Please use a desktop or laptop.
        </p>
    )
}

export default Placeholder