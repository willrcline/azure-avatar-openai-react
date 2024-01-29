import React from 'react';
import '../../assets/special.css';
import Colors from '../../helper/Colors.js';
import IconRow from './IconRow.js';
import styled from 'styled-components';

const BioText = () => {
    return (
        <p>
            I find large challenges exciting and enjoy discovering and defining problems as much as solving them.
        I deliver. I may enjoy thoughtful conversations about problems and perfecting designs, but in the end, I know that what matters is delivering a solution that works every time.
        I am resourceful, flexible and adaptable; no task is too big or too small.
        I am capable of working with imperfect information and solving problems under pressure.
        <br/><br/>
        With exceptional data science and full stack software engineering skills, including RPA and AI, I can automate complex processes, build robust software and front end solutions. I back my technical expertise with proven product management abilities and excellent communication and teamwork skills.
        <br/><br/>
        Based in Austin, Texas, I'm available for online or face-to-face meetings to discuss your work. Let's explore how I can assist you technically or connect you with my network.
            </p>
    )
}

const Bio = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin-bottom: 8rem;
        width: 25%;
        height: 50%;

        @media (max-width: 600px) {
            width: 65%;
            margin-bottom: 0rem;
            padding: 0rem;
        }
    `;

    const FadeContainer = styled.div`
        position: relative;
        height: 550px; /* Same as scrollableContent height */
        @media (max-width: 600px) {
            height: 195px
        }
    `;

    const ScrollableContent = styled.div`
        height: 550px; /* Adjust as needed */
        overflow-y: auto;
        text-align: left;
        position: relative;
        @media (max-width: 600px) {
            height: 195px
        }
    `;

    const FadeTop = styled.div`
        height: 200px;
        width: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(${Colors.offWhite}, transparent);
        pointer-events: none; /* Add this to allow interaction with the content below */
        z-index: 2;
        @media (max-width: 600px) {
            height: 75px
        }
    `;

    const FadeBottom = styled.div`
        height: 200px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background: linear-gradient(transparent, ${Colors.offWhite});
        pointer-events: none; /* Add this as well */
        @media (max-width: 600px) {
            height: 115px
        }
    `;

    const H2 = styled.h2`
        font-size: 40px; 
        margin-bottom: 2rem;
        @media (max-width: 600px) {
            font-size: 29px; 
            margin-bottom: 2rem;
        }
    `; 

    const H3 = styled.h3`
        
        @media (max-width: 600px) {
            font-size: 20px; 
        }
    `; 

    return (
        <Container>
            <FadeContainer>
                 <FadeTop />
                <ScrollableContent className='scrollableContent'>
                    <br />
                    <br />
                    {window.innerWidth >= 600 && (
                        <>
                        <br />
                        <br />
                            <br />
                            <br />
                            <br />
                        </>
                    )}
                    <H2>
                        Hi, How's it going?
                    </H2>

                    <H3 id="hero-quote">
                        "There are those who need to be told what to do and there are those who figure it out with grit."
                    </H3>
                    <br />
                    <BioText />
                    <br />
                    <IconRow />
                    <br />
                    <br />
                    <br />
                    <br />
                    {window.innerWidth >= 600 && (
                        <>
                            <br />
                            <br />
                            <br />
                            <br />
                        </>
                    )}
                </ScrollableContent>
                <FadeBottom />
            </FadeContainer>
        </Container>
    );
};

export default Bio;
