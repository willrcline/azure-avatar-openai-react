import { getFunctions, httpsCallable } from 'firebase/functions';
import app from "../firebase/firebaseConfig.js"

const fetchWhisper = async (fileName) => {
    const functions = getFunctions(app);
     const getWhisperResponse = httpsCallable(functions, 'whisper');
 
     try {
       const response = await getWhisperResponse({fileName: fileName});
        const transcription = response.data
       return transcription;
     } catch (error) {
       console.error('Error calling function:', error);
     }
   };

export default fetchWhisper;