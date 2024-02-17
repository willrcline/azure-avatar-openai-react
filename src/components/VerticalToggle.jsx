import React from 'react';
import Colors from "../helper/Colors.js";
import customCursor from "../assets/cursor.png"

const VerticalToggle = ({ page, setPage }) => {
    const handleClick = () => {
        const pages = [0, 1];
        const nextPage = (page + 1) % pages.length;
        setPage(pages[nextPage]);
        console.log("VerticalToggle.jsx handleClick___", pages[nextPage])
    };


    const topStyle = page === 0 
        ? { ...styles.commonBarStyle, ...styles.topBarStyle } 
        : { ...styles.commonBarStyle, ...styles.bottomBarStyle };

    return (
        // <div style={{flex: 1, cursor: `url(${customCursor})`,}}>
            <div style={styles.containerStyle} onClick={handleClick}>
                <div style={topStyle}></div>
            </div>
        // </div>
    );
};

const styles = {
    containerStyle: {
        width: '6px',
        height: '85px',
        backgroundColor: Colors.lightGray,
        borderRadius: '5px',
        position: 'fixed',
        right: '0rem',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '10px',
        // cursor: 'pointer',
        cursor: `url(${customCursor}), pointer`,
        zIndex: 101
    },
    commonBarStyle: {
        width: '100%',
        height: '25px',
        backgroundColor: Colors.darkGray,
        position: 'absolute', // Position it absolutely within the parent
        left: 0,
        transition: 'margin-top 0.3s ease', // Animate the marginTop property
        cursor: `url(${customCursor})`,
    },
    topBarStyle: {
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        marginTop: '0', // Start at the top
        cursor: `url(${customCursor})`,
    },
    bottomBarStyle: {
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        marginTop: 60, // 85 - 25 = 60
        cursor: `url(${customCursor})`,
    }
};

export default VerticalToggle;
