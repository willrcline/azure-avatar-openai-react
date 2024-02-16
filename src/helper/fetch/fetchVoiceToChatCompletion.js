
const fetchVoiceToChatCompletion = async ({uri, userId}) => {
    var projectId = 'WILLRCLINE.COM'
    try {
    // Specify the API endpoint
    const uploadUrl = `https://shockley.xyz/v1/voice-to-chat-completion/?userId=${userId}&projectId=${projectId}`;
    
    const formData = new FormData();
    // You may need to adjust 'type' and 'name' based on your server's expectations
    // formData.append('file', {
    //   uri: uri,
    //   type: 'audio/webm', // Adjust based on the actual MIME type of your audio
    //   name: 'recording.webm', // The name of the file
    // });
    formData.append('file', uri, 'recording.webm');

    // Perform the file upload using fetch
    const response = await fetch(uploadUrl, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const responseData = await response.json();
    console.log("fetchVoiceToChatCompletion after fetch response___", responseData)
    console.log("fetchVoiceToChatCompletion after fetch response chatCompletion___", responseData.chatCompletion)
    return responseData;
    } catch (error) {
        console.error('Error calling function:', error);
    }
};

export default fetchVoiceToChatCompletion;