// import { useState } from "react";
import { createAvatarSynthesizer, createWebRTCConnection } from "./Utility";
import { avatarAppConfig } from "./config";

const AvatarVideo = ({myAvatarAudioEleRef, myAvatarVideoEleRef, avatarSynthesizer, setAvatarSynthesizer}) => {
    var iceUrl = avatarAppConfig.iceUrl
    var iceUsername = avatarAppConfig.iceUsername
    var iceCredential = avatarAppConfig.iceCredential

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
      }

      const startSession = () => {

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
            console.log("[" + (new Date()).toISOString() + "] Avatar started.")
    
        }).catch(
            (error) => {
                console.log("[" + (new Date()).toISOString() + "] Avatar failed to start. Error: " + error)
            }
        );
    }



    return (
    <div style={styles.myAvatarVideoContainer}>
        <div id="myAvatarVideo" style={styles.myVideoDiv}>
            
            <video style={styles.video} ref={myAvatarVideoEleRef}>

            </video>

            <audio ref={myAvatarAudioEleRef}>

            </audio>
        </div>
        <div className="myButtonGroup d-flex justify-content-around">
            <button className="btn btn-success"
                onClick={startSession}>
                Connect
            </button>
            <button className="btn btn-danger"
                onClick={stopSession}>
                Disconnect
            </button>
        </div>
    </div>
    )
}

const styles = {
    myAvatarVideoContainer: {
        height: '26rem',
        width: '30rem',
        borderRadius: '8px',
        padding: '3rem',
    },
    myVideoDiv: {
        width: '26rem',
        height: '30rem',
        marginBottom: '2rem',
    },
    video: {
        margin: '0px 0px 20px 0px',
        // paddingRight: '5rem',
        width: '26rem',
        height: '30rem',
        borderRadius: '8px',
    },
}

export default AvatarVideo