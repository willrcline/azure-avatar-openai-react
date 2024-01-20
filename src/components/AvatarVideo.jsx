// import { useState } from "react";
import { useContext, useState } from "react";
import { createAvatarSynthesizer, createWebRTCConnection } from "./Utility";
import { avatarAppConfig } from "./config";
import { AvatarContext } from "./Avatar.jsx";
import Colors from "../helper/Colors.js";
import { useSpeakSelectedText } from "../helper/hooks/useSpeakSelectedText";
import { useStartSession } from "../helper/hooks/AvatarVideoControls.js";


const AvatarVideo = () => {
    const {myAvatarAudioEleRef, myAvatarVideoEleRef} = useContext(AvatarContext);

    return (
    <div style={styles.myAvatarVideoContainer}>
        <div id="myAvatarVideo" style={styles.myVideoDiv}>
            
            <video style={styles.video} ref={myAvatarVideoEleRef}>

            </video>

            <audio ref={myAvatarAudioEleRef}>

            </audio>
        </div>
           
        </div>
    )
}

const styles = {
    myAvatarVideoContainer: {
        marginTop: '4rem',
        height: '30rem',
        width: '26rem',
        borderRadius: '8px',
        // padding: '3rem',
    },
    myVideoDiv: {
        height: '30rem',
        width: '26rem',
        marginBottom: '2rem',
    },
    video: {
        margin: '0px 0px 20px 0px',
        // paddingRight: '5rem',
        height: '30rem',
        width: '26rem',
        borderRadius: '8px',
    },
}

export default AvatarVideo