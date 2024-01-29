import React from 'react';
import bottomShadow from "../assets/bottom-shadow.svg";
import plantShadow from "../assets/plant-shadow.chunk.svg";
import plantImage from "../assets/plant.chunk.png";
import styled from 'styled-components';

const Footer = () => {
    const Plant = styled.img`
    position: absolute;
    right: 50px;
    bottom: 10px;
    width: 115px;

    // Media query for screens smaller than 768px
    @media (max-width: 600px) {
        width: 75px;
    }
    `;

    return (
        <div style={{position:"fixed", bottom: 0}}>
            <img style={{width:"100vw"}} src={bottomShadow} alt="Image 2" />
            <Plant src={plantImage} alt="Image 1" />
        </div>
    );
};

export default Footer;
