import { useState, useEffect, useContext } from "react";
import Colors from "../../helper/Colors.js";
import { useInputPipeline } from "../../helper/hooks/useInputPipeline.js";

const chatSuggestions = [
    "What stands out in Will's resume?",
    "What are Will's key strengths?",
    "Which project on Will's resume is most intriguing?",
    "Can you highlight challenges and solutions from Will's projects?",
    "What top tech skill does Will have for full stack development?",
    "How does Will's experience fit full stack development needs?",
    "Where could Will improve professionally?",
    "How has Will evolved over time, per his resume?",
    "Would Will fit well in a team environment?",
    "What soft skills does Will bring to the table?",
    "Is Will a good fit for a full stack developer role?",
    "Any concerns or highlights in Will's resume?",
    "Where do you see Will in five years?",
    "Three adjectives to describe Will?",
    "What motivates Will professionally?",
    "Any 'red flags' on Will's resume?",
    "Will's greatest professional achievement?"
];

const ChatSuggestions = ({setMyInputText, chatHistory, setChatHistory}) => {
    const [buttonTexts, setButtonTexts] = useState([]);
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);
    const inputPipeline = useInputPipeline({chatHistory, setChatHistory});

    useEffect(() => {
       shuffleButtonTexts()
    }, []);

    const shuffleButtonTexts = () => {
        const shuffled = chatSuggestions.sort(() => 0.5 - Math.random());
        setButtonTexts(shuffled.slice(0, 4));
    }

    const handleButtonClick = (text) => {
        setMyInputText('')
        shuffleButtonTexts()
        inputPipeline(text);
    };

    const handleButtonHover = (index) => {
        setHoveredButtonIndex(index);
    };

    const handleButtonLeave = () => {
        setHoveredButtonIndex(null);
    };

    return (
        <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {buttonTexts.map((text, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.buttonStyle,
                                background: hoveredButtonIndex === index ? Colors.lightGray : 'none'
                            }}
                            onClick={() => handleButtonClick(text)}
                            onMouseEnter={() => handleButtonHover(index)}
                            onMouseLeave={handleButtonLeave}
                        >
                            {text}
                        </button>
                    ))}
                </div>
        </div>
    );
};

const styles = {
    buttonStyle : {
        border: `1px solid ${Colors.lightGray}`,
        background: 'none',
        padding: '4px',
        margin: '1px',
        fontSize: '14px',
        color: Colors.warmBlack,
        cursor: 'pointer',
        borderRadius: '10px',
        textAlign: 'left',
    }
}

export default ChatSuggestions;