import { useContext, useEffect, useRef, useCallback } from "react";
import { createAvatarSynthesizer, createWebRTCConnection } from "../../components/Utility.js";
import { avatarAppConfig } from "../../components/config.js";
import { AvatarContext } from "../../components/Avatar.jsx";
import { useSpeakSelectedText } from "./useSpeakSelectedText";

function useStartSession() {
    const {setSessionStarted, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef} = useContext(AvatarContext);

    const startSession = () => {

        
        const handleOnTrack = (event) => {
            
            console.log("#### Printing handle onTrack ",event);
            
            // Update UI elements
            console.log("Printing event.track.kind ",event.track.kind);
            if (event.track.kind === 'video') {
                const mediaPlayer = myAvatarVideoEleRef.current;
                mediaPlayer.id = event.track.kind;
                mediaPlayer.srcObject = event.streams[0];
                mediaPlayer.autoplay = true;
                mediaPlayer.playsInline = true;
                mediaPlayer.addEventListener('play', () => {
                    window.requestAnimationFrame(()=>{});
                });
            } else {
                // Mute the audio player to make sure it can auto play, will unmute it when speaking
                // Refer to https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
                //const mediaPlayer = myAvatarVideoEleRef.current;
                const audioPlayer = myAvatarAudioEleRef.current;
                audioPlayer.srcObject = event.streams[0];
                audioPlayer.autoplay = true;
                audioPlayer.playsInline = true;
                audioPlayer.muted = true;
            }
        };

                var iceUrl = avatarAppConfig.iceUrl
                var iceUsername = avatarAppConfig.iceUsername
                var iceCredential = avatarAppConfig.iceCredential
                
                let peerConnection = createWebRTCConnection(iceUrl,iceUsername, iceCredential);
                console.log("Peer connection ",peerConnection);
                peerConnection.ontrack = handleOnTrack;
                peerConnection.addTransceiver('video', { direction: 'sendrecv' })
                peerConnection.addTransceiver('audio', { direction: 'sendrecv' })
                
                let avatarSynthesizer = createAvatarSynthesizer();
                setAvatarSynthesizer(avatarSynthesizer);
                peerConnection.oniceconnectionstatechange = e => {
                    console.log("WebRTC status: " + peerConnection.iceConnectionState)

                    if (peerConnection.iceConnectionState === 'connected') {
                        console.log("Connected to Azure Avatar service");
                    }

                    if (peerConnection.iceConnectionState === 'disconnected' || peerConnection.iceConnectionState === 'failed') {
                        console.log("Azure Avatar service Disconnected");
                    }
                }
            

            avatarSynthesizer.startAvatarAsync(peerConnection).then((r) => {
                console.log("[" + (new Date()).toISOString() + "] Avatar started.");
                setTimeout(() => {
                    setSessionStarted(true);
                }, 5000);
            }).catch(
                (error) => {
                    console.log("[" + (new Date()).toISOString() + "] Avatar failed to start. Error: " + error)
                }
            );
            
        }

    return startSession
}

function useStopSession() {
    const {avatarSynthesizer} = useContext(AvatarContext);


    const stopSession = () => {
        try{
          //Stop speaking
          avatarSynthesizer.stopSpeakingAsync().then(() => {
            console.log("[" + (new Date()).toISOString() + "] Stop speaking request sent.")
            // Close the synthesizer
            avatarSynthesizer.close();
          }).catch();
        }catch(e) {
        }

        return null
      }
    return stopSession
}

const useStartAvatar = () => {
    const speakText = useSpeakSelectedText();

    const startAvatar = useCallback(async (text) => {
        console.log("ChatBox.jsx handleStartAvatar___");
        // Replace this with actual logic to get text
        console.log("ChatBox.jsx handleStartAvatar text___", text);
        speakText(text);
    }, [speakText]);

    return startAvatar;
};


const useStopAvatar = () => {
    const { avatarSynthesizer } = useContext(AvatarContext);

    const stopAvatar = useCallback(() => {
        avatarSynthesizer.stopAvatarAsync()
            .then(() => console.log("[" + (new Date()).toISOString() + "] Stop speaking request sent."))
            .catch(error => console.error("Error stopping avatar:", error));
    }, [avatarSynthesizer]);

    return stopAvatar;
};


export { useStartSession, useStopSession, useStartAvatar, useStopAvatar }