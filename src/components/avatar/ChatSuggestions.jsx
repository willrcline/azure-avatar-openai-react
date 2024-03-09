import { useState, useEffect, useContext } from "react";
import Colors from "../../helper/Colors.js";
import { useInputPipeline } from "../../helper/hooks/useInputPipeline.js";
import styled from 'styled-components';

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

const StyledButton = styled.button`
  border: 1px solid ${Colors.lightGray};
  background: ${props => props.isHovered ? Colors.lightGray : 'none'};
  padding: 4px;
  margin: 1px;
  font-size: 14px;
  color: ${Colors.black};
  cursor: pointer;
  border-radius: 10px;
  text-align: left;
  font-family: 'Inter';
  font-weight: 400;

  // If you need to respond to hover with styled-components and not rely on state:
  &:hover {
    background: ${Colors.lightGray};
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

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

    const isMobile = window.innerWidth < 600;
    const gapSize = isMobile ? 4 : 8;

    return (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gapSize }}>
            {buttonTexts.map((text, index) => (
              <StyledButton
                key={index}
                isHovered={hoveredButtonIndex === index} // Pass in prop to indicate hover state
                onClick={() => handleButtonClick(text)}
                onMouseEnter={() => handleButtonHover(index)}
                onMouseLeave={handleButtonLeave}
              >
                {text}
              </StyledButton>
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