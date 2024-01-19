import { useState, useRef, useEffect, useContext, createContext } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";
import { StartSession, StopSession } from "./AvatarVideoControls.jsx";

export const AvatarContext = createContext(null);

export const Avatar = () => {
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();
    const [sessionStarted, setSessionStarted] = useState(false);


    const avatarLoaded = useRef(false);


    // useEffect(() => {

    //     // const start = async () => {
    //     //     await startSession();
    //     // }
    //     console.log("AvatarVideo.jsx useEffect___")
    //     const delay = setTimeout(() => {
    //         if (avatarLoaded.current === false) {
    //             avatarLoaded.current = true;
    //         console.log("delay ended___")
    //         StartSession();
    //         // start()
    //     }
    //     }, 5000);
        
    //     return () => {
    //         console.log("Cleaning up: Component unmounting or effect re-running");
    //         clearTimeout(delay);
    //     };
    //   }, []);

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarContext.Provider value={{avatarSynthesizer, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}}>
                    <StartSession />
                    <StopSession />
                    <AvatarVideo />
                    <ChatBox />
                </AvatarContext.Provider>
            </div>
        </div>
    )

}
const styles = {
    myAvatarContainer: {
        textAlign: 'center',
        marginTop: '5rem',
    },
}
