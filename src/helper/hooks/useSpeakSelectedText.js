import { useContext } from 'react';
import { AvatarContext } from "../../components/avatar/Avatar"
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

function useSpeakSelectedText() {
    const { avatarSynthesizer, myAvatarAudioEleRef, setInProgress } = useContext(AvatarContext);

    const speakText = (text) => {
        // Start speaking the text
        const audioPlayer = myAvatarAudioEleRef.current;
        console.log("Audio muted status ", audioPlayer.muted);
        audioPlayer.muted = false;

        avatarSynthesizer.speakTextAsync(text).then(
            (result) => {
                if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                    console.log("Speech and avatar synthesized to video stream.");
                    setInProgress(false);
                } else {
                    console.log("Unable to speak. Result ID: " + result.resultId);
                    if (result.reason === SpeechSDK.ResultReason.Canceled) {
                        let cancellationDetails = SpeechSDK.CancellationDetails.fromResult(result);
                        console.log(cancellationDetails.reason);
                        if (cancellationDetails.reason === SpeechSDK.CancellationReason.Error) {
                            console.log(cancellationDetails.errorDetails);
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
                avatarSynthesizer.close();
            });
    };

        return speakText;
    }

export { useSpeakSelectedText }