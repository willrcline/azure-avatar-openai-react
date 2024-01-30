import React from 'react';
import bottomShadow from "../assets/bottom-shadow.svg";
import plantShadow from "../assets/plant-shadow.chunk.svg";
import plantImage from "../assets/plant.chunk.png";
import styled from 'styled-components';

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

const Footer = () => {

    return (
        <Container>
            <img style={{width:"100%"}} src={bottomShadow} alt="Image 2" />
            <Plant src={plantImage} alt="Image 1" />
        </Container>
    );
};

export default Footer;
