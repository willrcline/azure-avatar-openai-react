import { useState, useContext} from 'react';
import fetchOpenAi from '../../service/fetchOpenAi';
import { useStartAvatar } from './AvatarVideoControls';
import { AvatarContext } from "../../components/avatar/Avatar";

const useInputPipeline = ({chatHistory, setChatHistory}) => {
    const startAvatar = useStartAvatar();
    const { setChatState } = useContext(AvatarContext);

    const inputPipeline = async (input) => {
        setChatState("loading")
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
