import { useState } from "react";
import { useRef } from "react";
import AvatarVideo from "./AvatarVideo";
import ChatBox from "./ChatBox";

export const Avatar = () => {
    const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
    const myAvatarVideoEleRef = useRef();
    const myAvatarAudioEleRef = useRef();

    return(
        <div className="container" style={styles.myAvatarContainer}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <AvatarVideo myAvatarAudioEleRef={myAvatarAudioEleRef} myAvatarVideoEleRef={myAvatarVideoEleRef} avatarSynthesizer={avatarSynthesizer} setAvatarSynthesizer={setAvatarSynthesizer}/>
                <ChatBox avatarSynthesizer={avatarSynthesizer} myAvatarAudioEleRef={myAvatarAudioEleRef} />
            </div>
        </div>
    )

}
const styles = {
    myAvatarContainer: {
        textAlign: 'center',
        backgroundColor: '#e9ecef',
        marginTop: '5rem',
    },
}
