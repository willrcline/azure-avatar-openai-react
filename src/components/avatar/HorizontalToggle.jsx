import React from 'react';
import Colors from "../../helper/Colors.js";

const HorizontalToggle = ({ inputMode, setInputMode}) => {
    const handleClick = () => {
        const modes = ['voice', 'text'];
        const nextIndex = (modes.indexOf(inputMode) + 1) % modes.length;
        setInputMode(modes[nextIndex]);
    };

    const leftStyle = inputMode === 'voice'
        ? { ...styles.commonBarStyle, ...styles.leftBarStyle }
        : { ...styles.commonBarStyle, ...styles.rightBarStyle };

    return (
        <div style={styles.containerStyle} onClick={handleClick}>
            <div style={leftStyle}></div>
        </div>
    );
};

const styles = {
    containerStyle: {
        width: '40px',
        height: '6px',
        backgroundColor: Colors.lightGray,
        borderRadius: '5px',
        transform: 'translateX(-50%)',
        margin: '10px',
        cursor: 'pointer'
    },
    commonBarStyle: {
        height: '100%',
        width: '10px',
        backgroundColor: Colors.darkGray,
        position: 'absolute',
        top: 0,
        transition: 'margin-left 0.3s ease',
    },
    leftBarStyle: {
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        marginLeft: '0',
    },
    rightBarStyle: {
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        marginLeft: '30px', // 40 - 10 = 30
    }
};

export default HorizontalToggle;
