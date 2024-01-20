import {useState, useContext, useEffect, useRef} from "react";
import Colors from "../helper/Colors.js";
import { AvatarContext } from "./Avatar.jsx";
import uploadFile from "../firebase/uploadFile.js";
import deleteFile from "../firebase/deleteFile.js";
import fetchCorrectedTranscript from "../service/fetchCorrectedTranscript.js";
import fetchWhisper from "../service/fetchWhisper.js";


const Audio = () => {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const { sessionStarted } = useContext(AvatarContext);
    const mediaRecorderRef = useRef(null);

    // useEffect(() => {
    //     console.log("Audio.jsx audioUrl___", audioURL)
    // }, [audioURL])



    const startRecording = () => {
        console.log("Audio.jsx startRecording___")
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.ondataavailable = handleDataAvailable;
          mediaRecorderRef.current.start();
          setRecording(true);
        });
      };
      
      const stopRecording = () => {
        console.log("Audio.jsx stopRecording___")
        mediaRecorderRef.current.stop();
        setRecording(false);
    };
    
    const handleDataAvailable = async (event) => {
        if (event.data.size > 0) {
            var uri = URL.createObjectURL(event.data);
            setAudioURL(uri);
            var fileName = await uploadFile(uri)
            console.timeLog("Audio.jsx fileName___", fileName)
            var transcript = await fetchWhisper(fileName)
            console.log("Audio.jsx transcript___", transcript)
            // var correctedTranscript = await fetchCorrectedTranscript({transcript: transcript})
            // console.log("Audio.jsx correctedTranscript___", correctedTranscript)
            //get ai's response to transcript:
            // await deleteFile(fileName)
        }
      };
      

    return (
        <>
            {sessionStarted && !recording &&(
            <p 
                style = {styles.p} 
                onClick={() => {startRecording()}}>
                Click here to talk
            </p>
            )}
            {sessionStarted && recording && (
            <p 
                style = {{ cursor: "pointer", color: Colors.gray, fontSize: 14, font: "Inter Variable", opacity: .3 }} 
                onClick={() => {stopRecording()}}>
                Listening
            </p>
            )}
        </>
    )
}

const styles = {
    p: {
        cursor: "pointer",
        color: Colors.gray,
        fontSize: "14px",
        fontFamily: "Inter Variable", // Note: Changed 'font' to 'fontFamily'
        // opacity: opacity, // Apply dynamic opacity
        opacity: .3,
        transition: "opacity 0.5s ease-in-out",
    }
}

export default Audio