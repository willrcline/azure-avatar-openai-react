import React from 'react';

const Bio = () => {
    return (
        <div style={styles.container}>
            <div style={{ textAlign: 'left' }}>
                <h3 id="hero-quote">"There are those who need to be told what to do and there are those who figure it out with grit."</h3>
                <br />
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
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex', 
        justifyContent: 'center',
        padding: '2rem',
        marginBottom: '8rem',
    }
}

export default Bio;
