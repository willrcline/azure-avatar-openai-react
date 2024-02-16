import { useRef, useCallback } from 'react';

function useAudioRecorder({ setChatState, setAudioURL }) {
  const mediaRecorderRef = useRef(null);

  const handleDataAvailable = useCallback((event) => {
    if (event.data.size > 0) {
      setAudioURL(event.data);
    }
  }, [setAudioURL]);

  const handleStartRecording = useCallback(() => {
    console.log("Audio.jsx handleStartRecording___");
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = handleDataAvailable;
      mediaRecorderRef.current.start();
      setChatState("recording");
    }).catch(error => {
      console.error("Error accessing the microphone: ", error);
    });
  }, [setChatState, handleDataAvailable]);

  const handleStopRecording = useCallback(() => {
    console.log("Audio.jsx handleStopRecording___");
    setChatState("loading");
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  }, [setChatState]);

  return { handleStartRecording, handleStopRecording };
}

export { useAudioRecorder} 
