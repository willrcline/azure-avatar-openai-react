import Colors from "../../helper/Colors.js";
import styled from 'styled-components';

const AudioToggle = ({handleAudioToggle, chatState }) => {

const getMessage = () => {
  switch (chatState) {
    case "preStart":
      return "Click here to begin";
    case "idle":
      return "Click here to talk";
    case "recording":
      return "Listening - Click here to finish speaking";
    case "loading":
      return "Thinking";
    case "speaking":
      return "Speaking";
    default:
      return "Unhandled state";
  }
};

const TextAreaContainer = styled.div`
  height: 1.75rem;
  cursor: pointer;
  padding: 1.5rem;
  display: flex;
  width: 29rem;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.lightGray};
  border-radius: 25px;
  @media (max-width: 600px) {
    margin-top: .5rem;
    width: 100%;
    // height: 1.25rem;
    padding: 1.25rem;
  }
`;

return (
      <TextAreaContainer onClick={handleAudioToggle}>
        <p style={styles.p}>
          {getMessage()}
        </p>
      </TextAreaContainer>
);
};


const styles = {
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    cursor: "pointer",
    color: Colors.black,
    marginTop: ".9rem",
    // fontWeight: "bold",
    zIndex: 2,
    fontSize: 16,
    fontFamily: 'Inter', 
    fontWeight: 400,
    // opacity: opacity, // Apply dynamic opacity
    opacity: .3,
    transition: "opacity 0.5s ease-in-out",
  }
}

export default AudioToggle