import { getFunctions, httpsCallable } from 'firebase/functions';
import app from "../firebase/firebaseConfig.js"

const fetchCorrectedTranscript = async (data) => {
   const functions = getFunctions(app);
    const correctedTranscriptFunction = httpsCallable(functions, 'generateCorrectedTranscript');

    try {
      const gptResponse = await correctedTranscriptFunction(data);
      let correctedTranscript = gptResponse.data
      return removeQuotes(correctedTranscript);
    } catch (error) {
      console.error('Error calling function:', error);
    }
  };

function removeQuotes(str) {
    if (str.startsWith('"') && str.endsWith('"')) {
        return str.substring(1, str.length - 1);
    }
    return str;
}
  export default fetchCorrectedTranscript;