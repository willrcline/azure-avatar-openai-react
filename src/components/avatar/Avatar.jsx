import { useState, useRef, useEffect, useContext, createContext } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";
import TriggerStart from "./TriggerStart";
import Audio from "./Audio";
import HorizontalToggle from "./HorizontalToggle";
import styled from "styled-components";

export const AvatarContext = createContext(null);

const Spacer = styled.div`
    height: 60px;
    display: flex;
    flexDirection: colunm;
    align-items: center;
    
    @media (max-width: 600px) {
        height: 15px;
    }
`;

export const Avatar = () => {
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const [sessionStarted, setSessionStarted] = useState(false)
    const [inProgress, setInProgress] = useState(false)
    const [inputMode, setInputMode] = useState('text'); // ['voice', 'type'
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarContext.Provider value={{inProgress, setInProgress, sessionStarted, setSessionStarted, avatarSynthesizer, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}}>
                    <TriggerStart />
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        <AvatarVideo />
                        <Spacer>
                            {/* {sessionStarted && <HorizontalToggle inputMode={inputMode} setInputMode={setInputMode}/>} */}
                            {/* {sessionStarted && inputMode === "voice" && <Audio />} */}
                        </Spacer>
                    </div>
                    {sessionStarted && inputMode === "text" && <ChatBox />}
                </AvatarContext.Provider>
            </div>
        </div>
    )

}
const styles = {
    myAvatarContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        // marginTop: '5rem',
    },
}
