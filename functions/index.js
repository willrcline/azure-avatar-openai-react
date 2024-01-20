const functions = require("firebase-functions");
const {getOpenAIResponse} = require("./helper/openai")
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
// const db = require("./helper/db");
const fs = require('fs'); // Needed to read files from the file system

// const {onRequest} = require("firebase-functions/v2/https");
// const {onSchedule} = require("firebase-functions/v2/scheduler");
const OpenAI = require("openai");;
admin.initializeApp();
const storageBucket = "portfolio-d3613.appspot.com"

exports.openAI = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const prompt = request.body.data.prompt;
        const maxTokens = request.body.data.maxTokens || null;
        const temperature = request.body.data.temperature || null;
    
        try {
            const responseContent = await getOpenAIResponse({prompt, maxTokens, temperature});
            response.status(200).send({"data": responseContent});
        } catch (error) {
            response.status(500).send(error);
        }
    })
});

exports.generateCorrectedTranscript = functions.https.onRequest(async (request, response) => {
    const systemPrompt = "You are a helpful assistant for the app Journal365. Your task is to correct any spelling discrepancies in the transcribed text. Only add necessary punctuation such as periods, commas, and capitalization, and use only the context provided."
    const transcript = request.body.data.transcript;
    const maxTokens = request.body.data.maxTokens || null;
    const temperature = request.body.data.temperature || null;
  
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: transcript
          }
        ],
        max_tokens: maxTokens,
        temperature: temperature,
      });
      var responseContent = completion.choices[0].message.content;
      response.status(200).send({"data": responseContent});
  
    } catch (error) {
      response.status(500).send(error);
    }
  })
  
  exports.whisper = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        if (request.method !== 'POST') {
            return response.status(405).json({ error: 'Method Not Allowed' });
        }

        const fileName = request.body.data.fileName;
        console.log("fileName___", fileName);

        // Initialize Firebase Storage
        const storage = admin.storage();
        const bucket = storage.bucket(storageBucket);

        // Download the file from Firebase Storage
        const tempFilePath = '/tmp/yourAudioFile.m4a';
        await bucket.file(fileName).download({ destination: tempFilePath });
        console.log("tempFilePath has been used___");

        const formData = new FormData();
        formData.append('model', 'whisper-1');
        formData.append('file', fs.createReadStream(tempFilePath), {
            filename: 'recording.m4a',
            contentType: 'audio/m4a',
        });
        formData.append('response_format', 'text');
        console.log("formData has been created___");

        try {
            const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
                headers: { Authorization: 'Bearer ' + process.env.OPENAI_API_KEY },
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error(`Failed to transcribe: ${res.statusText}`);
            }

            const transcription = await res.text();
            console.log("fetchWhisper transcription___", transcription);
            response.status(200).send({ "data": transcription });
        } catch (error) {
            console.error("Error transcribing: ", error);
            response.status(500).send({ error: error.message });
        }
    });
});