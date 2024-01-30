import React from 'react';
import Portrait from './Portrait';
import Bio from "./Bio";
import styled from 'styled-components';

const Container = styled.div`
    height: 100%; 
    margin-top: 2rem;
    margin-right: 4rem;
    margin-left: 4rem;
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column-reverse;
        margin-right: 0rem;
        margin-left: 0rem;
        margin-bottom: 3rem;
    }
`;

const Me = () => {
    return (
        <Container>
            <Portrait />
            <Bio />
        </Container>
    )
}

export default Me;