import React, {useState} from 'react';
import Portrait from './Portrait';
import Bio from "./Bio";

const Me = () => {

    return (
        <div style={styles.container}>
            <h1 style={{fontSize: '45px'}}>Hi, How's it going?</h1>
            <div style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
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
