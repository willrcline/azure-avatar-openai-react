import React from 'react';
import '../../assets/special.css';
import Colors from '../../helper/Colors.js';
import IconRow from './IconRow.js';
import styled from 'styled-components';

const BioText = () => {
    return (
        <p style={styles.font}>
            I'm Will, and I specialize in AI integrated full stack software development.
            <br /><br />
            <ul>
                <li>I find large challenges exciting and enjoy discovering and defining problems as much as solving them.</li>
                <li>I deliver. I may enjoy thoughtful conversations about problems and perfecting designs, but in the end, I know that what matters is delivering a solution that works every time.</li>
                <li>I am resourceful, flexible and adaptable; no task is too big or too small.</li>
                <li>I am capable of working with imperfect information and solving problems under pressure.</li>
            </ul>
            <br />
            With exceptional full stack software engineering and data science skills, I can write robust full stack software with a focus on AI integration. I back my technical expertise with proven product management abilities and excellent communication and teamwork skills.
            <br /><br />
            Based in Austin, Texas, I'm available for online or face-to-face meetings to discuss your work. Let's explore how I can assist you technically or connect you with my network.
        </p>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 2.6rem;
    margin-bottom: 8rem;
    width: 25%;
    height: 50%;

    @media (max-width: 600px) {
        width: 65%;
        margin-bottom: 1rem;
        padding: 0rem;
    }
`;

const FadeContainer = styled.div`
    position: relative;
    height: 68vh; /* Same as scrollableContent height */
    @media (max-width: 600px) {
        height: 195px
    }
`;

const ScrollableContent = styled.div`
    height: 68vh; /* Adjust as needed */
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
        height: 80px
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
        height: 80px
    }
`;

const H2 = styled.h2`
    font-size: 40px; 
    margin-bottom: 2rem;
    font-family: 'Inter';
    font-weight: 400;
    @media (max-width: 600px) {
        font-size: 29px; 
        margin-bottom: 2rem;
    }
`; 

const H3 = styled.h3`
    font-family: 'Inter';
    font-weight: 400;
    @media (max-width: 600px) {
        font-size: 20px; 
    }
`; 
 
const Bio = () => {
    return (
        <Container>
            <FadeContainer>
                <FadeTop />
                <ScrollableContent className='scrollableContent'>
                    <br />
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
                    <H2 >
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
                            <br />
                            <br />
                            <br />
                            <br />
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

const styles = {
    font: {
        fontFamily: 'Inter',
        fontWeight: 400,
    },
}

export default Bio;
