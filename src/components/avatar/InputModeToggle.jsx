import React from 'react';
import Colors from "../../helper/Colors.js";
import { FaRegKeyboard } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import customCursor from "../../assets/cursor.png"

const InputModeToggle = ({ inputMode, setInputMode}) => {
    const handleClick = () => {
        const modes = ['voice', 'text'];
        const nextIndex = (modes.indexOf(inputMode) + 1) % modes.length;
        setInputMode(modes[nextIndex]);
    };

    return (
        <div style={styles.container} onClick={handleClick}>
            {(inputMode === "voice") &&  
                <FaRegKeyboard size={25} color={Colors.black}/>
            }
            {(inputMode === "text") &&  
                <FaMicrophoneAlt size={25} color={Colors.black}/>
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
        // cursor: 'pointer',
        cursor: `url(${customCursor}), pointer`,
        // alignSelf: 'flex-start',
    },
};

export default InputModeToggle;
