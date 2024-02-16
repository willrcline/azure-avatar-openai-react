import Colors from "../../helper/Colors.js";
const AudioToggle = ({handleAudioToggle, chatState }) => {

const getMessage = () => {
  switch (chatState) {
    case "preStart":
      return "Click here to begin";
    case "idle":
      return "Click here to talk";
    case "recording":
      return "Listening";
    case "loading":
      return "Thinking";
    case "speaking":
      return "Speaking";
    default:
      return "Unhandled state";
  }
};

return (
      <p onClick={handleAudioToggle} style={styles.p}>
        {getMessage()}
      </p>
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
    color: Colors.gray,
    // fontWeight: "bold",
    zIndex: 2,
    fontSize: 14,
    // opacity: opacity, // Apply dynamic opacity
    // opacity: .3,
    transition: "opacity 0.5s ease-in-out",
  }
}

export default AudioToggle