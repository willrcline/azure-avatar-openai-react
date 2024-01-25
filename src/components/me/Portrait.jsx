import React, { useState } from 'react';
import fullBody from "../../assets/full-body-portal.png"

const Portrait = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        // <div
        //     onMouseEnter={() => setShowTooltip(true)}
        //     onMouseLeave={() => setShowTooltip(false)}
        //     style={styles.container}
        // >
            <img style={{ height: "80vh"}} alt="full body shot of Will Cline" src={fullBody} id="profile-picture" />
        
        // </div>
    );
};

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
}

export default Portrait;
