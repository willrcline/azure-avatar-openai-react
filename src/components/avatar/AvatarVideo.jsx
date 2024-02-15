import { useContext, useState, useEffect } from "react";
import { AvatarContext } from "./Avatar.jsx";
import styled from 'styled-components';
import Colors from "../../helper/Colors.js";
import Warning from "./Warning.jsx";

// Define your styled components outside of your component
const MyAvatarVideoContainer = styled.div`
  margin-top: 4rem;
  height: 30rem;
  width: 26rem;
  border-radius: 8px;
  @media (max-width: 600px) {
    height: 22rem;
    width: 20rem;
    margin-top: .25rem;
    }
`;

const MyVideoDiv = styled.div`
  height: 30rem;
  width: 26rem;
  position: relative;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    height: 22rem;
    width: 20rem;
    }
`;

const Video = styled.video`
  margin: 0px 0px 20px 0px;
  height: 30rem;
  width: 26rem;
  border-radius: 8px;
  @media (max-width: 600px) {
    height: 22rem;
    width: 20rem;
    }
`;

const AvatarVideo = () => {
    const {sessionStarted, myAvatarAudioEleRef, myAvatarVideoEleRef} = useContext(AvatarContext);
    const overlayStyle = {
        ...styles.overlay,
        opacity: !sessionStarted ? 1 : 0, // Control the opacity based on sessionStarted
        pointerEvents: 'none', // Enable or disable pointer events based on sessionStarted
    };

   

    return (
        <MyAvatarVideoContainer>
            <MyVideoDiv>
                <Warning sessionStarted={sessionStarted} myAvatarVideoEleRef={myAvatarVideoEleRef}/>
                <div style={overlayStyle}/>
                <Video ref={myAvatarVideoEleRef} />
                <audio ref={myAvatarAudioEleRef} />
            </MyVideoDiv>
        </MyAvatarVideoContainer>
    );
}
const styles = {
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
}

export default AvatarVideo