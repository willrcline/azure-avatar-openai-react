// import { useState } from "react";
import { useContext, useState } from "react";
import { AvatarContext } from "./Avatar.jsx";
import Colors from "../helper/Colors.js";


const AvatarVideo = () => {
    const {sessionStarted, myAvatarAudioEleRef, myAvatarVideoEleRef} = useContext(AvatarContext);

    const overlayStyle = {
        ...styles.overlay,
        opacity: !sessionStarted ? 1 : 0, // Control the opacity based on sessionStarted
        pointerEvents: 'none', // Enable or disable pointer events based on sessionStarted
    };

    return (
    <div style={styles.myAvatarVideoContainer}>
        <div id="myAvatarVideo" style={styles.myVideoDiv}>
            <div style={overlayStyle} />

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
        position: 'relative',
        marginBottom: '2rem',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.offWhite,
        opacity: 0.8, // Adjust for desired overlay opacity
        transition: 'opacity 2s ease-in-out',
        zIndex: 100, // Ensure it's above other content
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