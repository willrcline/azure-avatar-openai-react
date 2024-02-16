
const fetchVoiceToChatCompletion = async ({uri, userId}) => {
    var projectId = 'WILLRCLINE.COM'
    try {
    // Specify the API endpoint
    const uploadUrl = `https://shockley.xyz/v1/voice-to-chat-completion/?userId=${userId}&projectId=${projectId}`;
    
    const formData = new FormData();
    // You may need to adjust 'type' and 'name' based on your server's expectations
    formData.append('file', {
      uri: uri,
      type: 'audio/m4a', // Adjust based on the actual MIME type of your audio
      name: 'recording.m4a', // The name of the file
    });

    // Perform the file upload using fetch
    const response = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    console.log("fetchVoiceToChatCompletion after fetch___")
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
    } catch (error) {
        console.error('Error calling function:', error);
    }
};

export default fetchVoiceToChatCompletion;