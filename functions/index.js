const functions = require("firebase-functions");
const {getOpenAIResponse} = require("./helper/openai")
const cors = require('cors')({origin: true});
// const {onRequest} = require("firebase-functions/v2/https");
// const {onSchedule} = require("firebase-functions/v2/scheduler");
// const OpenAI = require("openai");;

exports.openAI = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const chatHistory = request.body.data.chatHistory
        const maxTokens = request.body.data.maxTokens || null;
        const temperature = request.body.data.temperature || null;
    
        try {
            const responseContent = await getOpenAIResponse({chatHistory, maxTokens, temperature});
            response.status(200).send({"data": responseContent});
        } catch (error) {
            response.status(500).send(error);
        }
    })
});
