import {useState, useContext, useEffect, useRef} from "react";
import Colors from "../../helper/Colors.js";
import { AvatarContext } from "./Avatar.jsx";
import fetchVoiceToChatCompletion from "../../helper/fetch/fetchVoiceToChatCompletion.js";
import { v4 as uuidv4 } from 'uuid'; 
import { useStartAvatar } from '../../helper/hooks/AvatarVideoControls.js'
import { useAudioRecorder } from "../../helper/hooks/useAudioRecorder.js";
import AudioToggle from "./AudioToggle";

const Audio = () => {
  const [chatState, setChatState] = useState("idle");
  const [audioURL, setAudioURL] = useState('');
  const { sessionStarted } = useContext(AvatarContext);
  const startAvatar = useStartAvatar();
  const { handleStartRecording, handleStopRecording } = useAudioRecorder({ setChatState , setAudioURL });

  const userId = uuidv4()


    useEffect(() => {
        console.log("Audio.jsx audioUrl___", audioURL);
        if (audioURL === '') return;

        const fetchChatCompletion = async () => {
          var chatCompletion = await fetchVoiceToChatCompletion({uri: audioURL, userId});
          startAvatar(chatCompletion);
        };

        fetchChatCompletion();
    }, [audioURL]);



      const handleAudioToggle = () => {
        switch (chatState) {
          case "idle":
            handleStartRecording();
            break;
          case "recording":
            handleStopRecording();
            break;
          default:
            console.log('Unhandled state:', chatState);
        }
      };

      return (
        <div style={styles.container}>
          <AudioToggle handleAudioToggle={handleAudioToggle} chatState={chatState} />
        </div>
      );
  }

const styles = {
    container: {
    },
}
    

export default Audio