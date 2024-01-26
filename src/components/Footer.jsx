import React from 'react';
import bottomShadow from "../assets/bottom-shadow.svg";
import plantShadow from "../assets/plant-shadow.chunk.svg";
import plantImage from "../assets/plant.chunk.png";

const Footer = () => {
    return (
        <div style={{position:"fixed", bottom: 0}}>
            <img style={{width:"100vw"}} src={bottomShadow} alt="Image 2" />
            <img style={{width: 115, right: 50, bottom: 10, position: "absolute"}} src={plantImage} alt="Image 1" />
        </div>
    );
};

export default Footer;