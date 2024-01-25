import React, {useState} from 'react';
import Portrait from './Portrait';
import Bio from "./Bio";

const Me = () => {

    return (
        <div style={styles.container}>
            <div style={{height: "100%", marginTop: "1rem", display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                <Portrait />
                <Bio />
            </div>
        </div>
    )
}

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
    }
}

export default Me;
