import React, { useState } from 'react';
import fullBody from "../../assets/full-body-portal.png"

const Portrait = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={styles.container}
        >
            <img style={{ width: "100%"}} alt="full body shot of Will Cline" src={fullBody} id="profile-picture" />
        
        </div>
    );
};

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
        width: '80%',
    }
}

export default Portrait;
