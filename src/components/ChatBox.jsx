import { useState, useContext } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import fetchOpenAi from "../service/fetchOpenAi";
import { assistantPrompt } from "../helper/promptFactory";
import { AvatarContext } from "./Avatar.jsx";
import { useSpeakSelectedText } from "../helper/hooks/useSpeakSelectedText";

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

    
    // const speakSelectedText = (text) => {

    //     //Start speaking the text
    //     const audioPlayer = myAvatarAudioEleRef.current;
    //     console.log("Audio muted status ",audioPlayer.muted);
    //     audioPlayer.muted = false;        
    //     avatarSynthesizer.speakTextAsync(text).then(
    //         (result) => {
    //             if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
    //                 console.log("Speech and avatar synthesized to video stream.")
    //             } else {
    //                 console.log("Unable to speak. Result ID: " + result.resultId)
    //                 if (result.reason === SpeechSDK.ResultReason.Canceled) {
    //                     let cancellationDetails = SpeechSDK.CancellationDetails.fromResult(result)
    //                     console.log(cancellationDetails.reason)
    //                     if (cancellationDetails.reason === SpeechSDK.CancellationReason.Error) {
    //                         console.log(cancellationDetails.errorDetails)
    //                     }
    //                 }
    //             }
    //     }).catch((error) => {
    //         console.log(error)
    //         avatarSynthesizer.close()
    //     });
    // }
    
    return (
            <div style={styles.myTextAreaContainer}>
                
                <textarea style={styles.myTextArea} value={mySpeechText} onChange={handleSpeechText}>

                </textarea>
                <div className="myButtonGroup d-flex justify-content-around">
                    <button className="btn btn-success" onClick={handleStartSpeak}>
                        Speak
                    </button>
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
        height: '11rem',
        width: '35rem',
        borderRadius: '5px',
        borderColor: 'grey',
    },
}
export default ChatBox

