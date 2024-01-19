import { useContext, useEffect, useRef } from "react";
import { createAvatarSynthesizer, createWebRTCConnection } from "./Utility";
import { avatarAppConfig } from "./config";
import { AvatarContext } from "./Avatar.jsx";

    const StartSession = () => {
        const {setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef} = useContext(AvatarContext);

        
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

        const avatarLoaded = useRef(false);
        
        useEffect(() => {
            return () => {
            if (avatarLoaded.current === false) {
                avatarLoaded.current = true;
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
                // setSessionStarted(true);
                console.log("[" + (new Date()).toISOString() + "] Avatar started.")

            }).catch(
                (error) => {
                    console.log("[" + (new Date()).toISOString() + "] Avatar failed to start. Error: " + error)
                }
            );
            

            }

        }  
        }, []);

            return null

    }

    const StopSession = () => {
        // const {avatarSynthesizer} = useContext(AvatarContext);

        // try{
        //   //Stop speaking
        //   avatarSynthesizer.stopSpeakingAsync().then(() => {
        //     console.log("[" + (new Date()).toISOString() + "] Stop speaking request sent.")
        //     // Close the synthesizer
        //     avatarSynthesizer.close();
        //   }).catch();
        // }catch(e) {
        // }

        return null
      }
    
export { StartSession, StopSession }