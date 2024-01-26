import React from 'react';
import '../../assets/special.css';
import Colors from '../../helper/Colors.js';
import IconRow from './IconRow.js';

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

    return (
        <div style={styles.container}>
            <div style={styles.fadeContainer}> 
                <div style={styles.fadeTop} />
                <div className="scrollableContent" style={styles.scrollableContent}>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h2 style={{fontSize: '40px', marginBottom: '2rem'}}>Hi, How's it going?</h2>

                    <h3 id="hero-quote">"There are those who need to be told what to do and there are those who figure it out with grit."</h3>
                    <br />
                    <BioText />
                    <br/>
                    <IconRow />
                    <br/><br/><br/><br/><br/><br/>
                </div>
                <div style={styles.fadeBottom} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '8rem',
        // marginRight: '5rem',
        width: '25%',
        // position: 'absolute'
    },
    fadeContainer: {
        position: 'relative',
        height: '550px', // Same as scrollableContent height
    },
    scrollableContent: {
        height: '550px', // Adjust as needed
        overflowY: 'auto',
        textAlign: 'left',
        position: 'relative',
    },
    fadeTop: {
        height: '200px',
        width: '100%',
        position: 'absolute',
        top: 0,
        background: `linear-gradient(${Colors.offWhite}, transparent)`,
        pointerEvents: 'none', // Add this to allow interaction with the content below
        zIndex: 2
    },
    fadeBottom: {
        height: '200px',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: `linear-gradient(transparent, ${Colors.offWhite})`,
        pointerEvents: 'none', // Add this as well
    },
}

export default Bio;
