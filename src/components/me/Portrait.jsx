import React, { useState } from 'react';
import fullBody from "../../assets/full-body-portal.png"
import styled from 'styled-components';

const Portrait = () => {

    const PortraitImg = styled.img`
        height: 80vh;

        @media (max-width: 600px) {
            height: 45vh;

        }
    `;

    return (
        <PortraitImg alt="full body shot of Will Cline" src={fullBody} id="profile-picture" />
    );
};


export default Portrait;
