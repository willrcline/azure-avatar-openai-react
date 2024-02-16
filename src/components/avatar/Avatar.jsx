import { useState, useRef, useEffect, useContext, createContext } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";
import TriggerStart from "./TriggerStart";
import Audio from "./Audio";
import HorizontalToggle from "./HorizontalToggle";
import styled from "styled-components";

export const AvatarContext = createContext(null);



export const Avatar = () => {
    const [chatState, setChatState] = useState("idle");
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const [sessionStarted, setSessionStarted] = useState(false)
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarContext.Provider value={{chatState, setChatState, sessionStarted, setSessionStarted, avatarSynthesizer, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}}>
                    <TriggerStart />
                        {/* <Spacer style={{ position: 'relative', display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
                            {sessionStarted && <HorizontalToggle inputMode={inputMode} setInputMode={setInputMode}/>}
                            {sessionStarted && inputMode === "voice" && <Audio />}
                        </Spacer> */}
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        <AvatarVideo />
                    </div>
                    {sessionStarted && <ChatBox />}
                    {/* {sessionStarted && inputMode === "text" && <ChatBox />} */}
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
