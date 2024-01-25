import { useState } from 'react';
import fetchOpenAi from '../../service/fetchOpenAi';
import { useStartAvatar } from './AvatarVideoControls';

const useInputPipeline = ({chatHistory, setChatHistory}) => {
    const startAvatar = useStartAvatar();

    const inputPipeline = async (input) => {
        var inputObj = { "role": "user", "content": input };
        console.log('useInputPipeline Current chatHistory___', chatHistory); // Add this line
        var updatedChatHistory = [...chatHistory, inputObj];
        console.log("ChatBox.jsx inputPipeline updatedChatHistory___", updatedChatHistory);
        var responseText = await fetchOpenAi({ chatHistory: updatedChatHistory });
        setChatHistory([...updatedChatHistory, { "role": "system", "content": responseText }]);
        startAvatar(responseText);
    }

    return inputPipeline;
}

export { useInputPipeline }
