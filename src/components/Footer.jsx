import React from 'react';
import bottomShadow from "../assets/bottom-shadow.svg";
import plantShadow from "../assets/plant-shadow.chunk.svg";
import plantImage from "../assets/plant.chunk.png";
import styled from 'styled-components';
import Colors from '../helper/Colors.js';

const Container = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100vw; // Ensures the footer stretches across the entire viewport width
display: flex; // Use flexbox for internal alignment
justify-content: center; // Center the contents
align-items: center; // Align items vertically
`;

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

const Copyright = styled.div`
position: absolute;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${Colors.gray2};
left: 50%;
transform: translateX(-50%);
bottom: 8px;
// top: 2px;
// Media query for screens smaller than 768px
@media (max-width: 600px) {
    
}
`;

const Footer = () => {

    return (
        <Container>
            <Copyright>
                <span style={{fontSize: 25, font: "Inter Variable",}}>&copy;&nbsp;</span>
                <span style={{font: "Inter Variable"}}>WillRCline.com</span>
            </Copyright>
            <img style={{width:"100%"}} src={bottomShadow} alt="Image 2" />
            <Plant src={plantImage} alt="Image 1" />
        </Container>
    );
};

export default Footer;
