import { getFunctions, httpsCallable } from 'firebase/functions';
import app from "../firebase/firebaseConfig"

const fetchOpenAi = async (data) => {
   const functions = getFunctions(app);
    const openAIFunction = httpsCallable(functions, 'openAI');

    try {
      const gptResponse = await openAIFunction(data);
     const content = gptResponse.data.message.content;
      return content;
    } catch (error) {
      console.error('Error calling function:', error);
    }
  };


  export default fetchOpenAi;