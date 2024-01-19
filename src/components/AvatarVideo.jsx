import { StartSession } from "./AvatarVideoControls.jsx";


const AvatarVideo = ({setAvatarSynthesizer, myAvatarAudioEleRef, myAvatarVideoEleRef}) => {


    return (
    <div style={styles.myAvatarVideoContainer}>
        <div id="myAvatarVideo" style={styles.myVideoDiv}>
            
            <video style={styles.video} ref={myAvatarVideoEleRef}>

            </video>
            {/* <Player style={styles.video} ref={myAvatarVideoEleRef}>
            </Player> */}

            <audio ref={myAvatarAudioEleRef}>

            </audio>
        </div>
        <div className="myButtonGroup d-flex justify-content-around">
            <button className="btn btn-success"
                onClick={StartSession}>
                Connect
            </button>
            {/* <button className="btn btn-danger"
                onClick={stopSession}>
                Disconnect
            </button> */}
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