import React from 'react';
import raisedFooterShadow from "../assets/raisedFooterShadow.svg";
import bottomShadow from "../assets/bottom-shadow.svg";
import plantShadow from "../assets/plant-shadow.chunk.svg";
import plantImage from "../assets/plant.chunk.png";
import Colors from '../helper/Colors.js';

const RaisedFooter = () => {
    return (
        <div style={{ position: "fixed", width: "100vw", bottom: 0, backgroundColor: Colors.lightOffWhite }}>
            <div style={{ height: "20rem", display: "flex", justifyContent: 'center', alignItems: 'flex-start', position: "relative" }}>
                <img style={{ width: "80vw" }} src={raisedFooterShadow} alt="Image 2" />
                <img style={{ width: 115, position: "absolute", right: 50, bottom: 10 }} src={plantImage} alt="Image 1" />
            </div>
        </div>
    );
};


export default RaisedFooter;
