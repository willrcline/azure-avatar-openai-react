import React from 'react';
import Colors from "../helper/Colors.js";

const ChatSuggestions = () => {
    const buttonTexts = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

    const handleButtonClick = (text) => {
        console.log(text);
    };

    
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick(buttonTexts[0])}>
                    {buttonTexts[0]}
                </button>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick(buttonTexts[1])}>
                    {buttonTexts[1]}
                </button>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick(buttonTexts[2])}>
                    {buttonTexts[2]}
                </button>
                <button style={styles.buttonStyle} onClick={() => handleButtonClick(buttonTexts[3])}>
                    {buttonTexts[3]}
                </button>
            </div>
        </div>
    );
};

const styles = {
    buttonStyle : {
    border: `1px solid ${Colors.lightGray}`,
    background: 'none',
    padding: '0',
    margin: '8px',
    fontSize: '14px',
    color: Colors.warmBlack,
    cursor: 'pointer',
    borderRadius: '10px',
    }
}

export default ChatSuggestions;
