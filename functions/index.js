const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const {getOpenAIResponse} = require('./helper/openai');

exports.openAI = functions.https.onRequest((request, response) => {
    // Set CORS headers for preflight requests
    response.set('Access-Control-Allow-Origin', '*'); // This allows all origins
    response.set('Access-Control-Allow-Methods', 'GET, POST'); // Allowed methods
    response.set('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

    // Respond to OPTIONS method for CORS preflight request
    if (request.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        response.status(204).send('');
        return;
    }

    // Handle actual request under CORS policy
    cors(request, response, async () => {
        const {chatHistory, maxTokens, temperature} = request.body.data;
        try {
            const responseContent = await getOpenAIResponse({chatHistory, maxTokens, temperature});
            response.status(200).send({"data": responseContent});
        } catch (error) {
            console.error('Error within openAI function:', error);
            response.status(500).send(error);
        }
    });
});
