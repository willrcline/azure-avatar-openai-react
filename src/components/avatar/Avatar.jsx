import { useState, useRef, useEffect, useContext, createContext } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";
import TriggerStart from "./TriggerStart";
import Colors from "../../helper/Colors";
import Audio from "./Audio";
import HorizontalToggle from "./HorizontalToggle";
import styled from "styled-components";
import CircleLoader from "react-spinners/CircleLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

export const AvatarContext = createContext(null);



export const Avatar = () => {
    const [chatState, setChatState] = useState("idle");
    const [startBtnClicked, setStartBtnClicked] = useState(false);
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const [sessionStarted, setSessionStarted] = useState(false)
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarContext.Provider value={{chatState, setChatState, sessionStarted, setSessionStarted, avatarSynthesizer, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}}>
                    <TriggerStart 
                      startBtnClicked={startBtnClicked}
                      setStartBtnClicked={setStartBtnClicked}
                    />
                        {/* <Spacer style={{ position: 'relative', display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
                            {sessionStarted && <HorizontalToggle inputMode={inputMode} setInputMode={setInputMode}/>}
                            {sessionStarted && inputMode === "voice" && <Audio />}
                        </Spacer> */}
                    {startBtnClicked && !sessionStarted && (
                      <PropagateLoader 
                        color={Colors.almostBlack} 
                        style={{
                          position: 'fixed',
                          top: '48%', /* Center vertically */
                          left: '50%', /* Center horizontally */
                          transform: 'translate(-50%, -50%)', // 
                          zIndex: 102,
                        }}/>
                    )}
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
