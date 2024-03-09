const fetchOpenAi = async ({chatHistory}) => {
  console.log("fetchOpenAi chatHistory___", chatHistory)
  try {
    const response = await fetch('https://shockley.xyz/v1/chat-completion/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatHistory })
    });
    // Handle the response here
    const responseText = await response.text();
    console.log("fetchOpenAi response.body___", responseText);
    return responseText;
  } catch (error) {
    // Handle the error here
    console.error(error);
  }
};

export default fetchOpenAi;
