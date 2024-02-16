import { useContext, useState, useEffect } from "react";
import Colors from "../../helper/Colors";

const Warning = ({ sessionStarted, myAvatarVideoEleRef }) => {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const videoElement = myAvatarVideoEleRef.current;

        const onPlaying = () => {
            setVideoPlaying(true);
            setShowWarning(false); // Hide warning if video starts playing
            console.log("onPlaying called___")
        };

        const onError = () => {
            setShowWarning(true); // Show warning on video error
        };

        videoElement.addEventListener('playing', onPlaying);
        videoElement.addEventListener('error', onError);

        // Check if video hasn't started after sessionStarted and 15 seconds passed
        if (sessionStarted && !videoPlaying) {
            const timer = setTimeout(() => {
                if (!videoPlaying) {
                    setShowWarning(true);
                }
            }, 9000); // 15 seconds

            return () => {
                clearTimeout(timer);
                videoElement.removeEventListener('playing', onPlaying);
                videoElement.removeEventListener('error', onError);
            };
        }
    }, [sessionStarted, videoPlaying, myAvatarVideoEleRef]);

    return (
        <>
            {showWarning && 
                <p style={{zIndex: 102, opacity: .1, font: "Inter Variable", position: "absolute", color: Colors.warmBlack }}>
                    We're having trouble rendering your experience.<br/>Please make sure you have a strong internet connection and disable any plugins that may be blocking the video.
                </p>
            }
        </>
    )
}

export default Warning