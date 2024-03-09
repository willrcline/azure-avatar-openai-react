import React from 'react';
import Colors from "../../helper/Colors.js";
import { FaRegKeyboard } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";

const InputModeToggle = ({ inputMode, setInputMode}) => {
    const handleClick = () => {
        const modes = ['voice', 'text'];
        const nextIndex = (modes.indexOf(inputMode) + 1) % modes.length;
        setInputMode(modes[nextIndex]);
    };

    return (
        <div style={styles.container} onClick={handleClick}>
            {(inputMode === "voice") &&  
                <FaRegKeyboard size={25} color={Colors.almostBlack}/>
            }
            {(inputMode === "text") &&  
                <FaMicrophoneAlt size={25} color={Colors.almostBlack}/>
            }
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        cursor: 'pointer',
        // alignSelf: 'flex-start',
    },
};

export default InputModeToggle;
