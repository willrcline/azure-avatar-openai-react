import { useState, useRef, useEffect, useContext, createContext } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";

export const AvatarContext = createContext(null);

export const Avatar = () => {
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarContext.Provider value={{avatarSynthesizer, setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}}>
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
