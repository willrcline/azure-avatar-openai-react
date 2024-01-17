const assistantPrompt = ({ text }) => {
    return `Here is Will Cline's resume: 
${resume}

You are his AI Professional Advocate named Ana. You are trying to get him jobs and clients. Simply return your response (don't put your name or quotes). Keep your response 2 sentences or less.

Person: ${text}

Your response?
`
}

const resume = `
PROFESSIONAL EXPERIENCE:

Bryan Lloyd Payne Consulting, AI Research and Development

Mar. 2022 - Current, Austin, TX
Currently working on automating consulting work.
365Consulting.io, PowerApp Development Contractor

May 2022 - Jan. 2023, Remote
Built internal power apps for multiple clients that are household names.
Used PowerShell and ShareGate to merge SharePoint intranet sites for a billion-dollar corporation.
Aided in discovery process for consulting clients.
The Distribution Point, Data Analyst

Aug. 2021 - Aug. 2022, Vestavia, AL
Leveraged machine learning techniques to reduce product lead time prediction error by over 8%.
Utilized Epicor Profit 21 to manage and analyze sales data, inventory levels, and customer information.
Rewrote SQL scripts to reduce product forecasting mean error by over 5%.
Built about 50 analytic reports to showcase KPIs using SQL and PowerBI.
Saved hundreds of hours and tens of thousands of dollars per year through RPA to automate manual labor tasks using Python Selenium and Power Automate.
Vincari, Intern

May 2019 - Aug. 2019, Innovation Depot Birmingham, AL
Worked on converting medical software company from AWS to G-Cloud for 30% cheaper hosting.
EDUCATION:

UT Austin Full Stack Web Development Bootcamp

Mar. 2023 - June 2023
Voted by peers as "AI expert" and "Most likely to inspire other developers".
Flatiron School in association with Birmingham-Southern College

May 2021 - Aug. 2021
Immersive Data Science Bootcamp program.
PROJECTS:

Simulation Hopper (video game featuring AI-driven NPC dialogue and mini-games)

June 2023
Pushes the boundaries of traditional gaming while paying homage to the classics.
Introduces pioneering AI innovations, revolutionizing the standard for interactive adventures.
Text Message Based Journaling Platform as a SAAS

Nov. 2021 - Current
Leveraged Twilio and Google Drive APIs to build SMS prompted journaling platform that organizes and stores entries in the cloud.
Developed ReactJS landing page with Oauth2.0 authentication and Stripe customer portal for user billing management.
Created marketing material and ran TikTok ad campaign.
Appointment Confirmation Software for Massage Envy

Jan. 2022 - May 2022
Automated text message appointment confirmation process in multiple Massage Envy Locations.
Web scraped with Selenium to gather client data from Massage Envy CRM, then send texts to clients and manage their responses using Twilio API and Python Pandas.
Deployed automation on Windows Task Scheduler.
Packaged software as a product and deployed across multiple Massage Envy stores in Alabama, saving a front desk associate around 30 minutes every day.
Presidential Election Prediction Machine Learning Model

July 2021 - July 2021
Predicted presidential election results with machine learning.
Leveraged demographic APIs to gather data.
Utilized scikit-learn to implement classification modeling techniques including grid-search and XGBoost.
Created visualizations with matplotlib to communicate findings to a non-technical audience.
Digital Punching Bag Alarm Clock

Nov. 2020 - Oct. 2021
Developed punching bag alarm clock and digital workout toy.
Integrated real-time clock, IMU, Bluetooth transmitter, mini speaker, LCD screen, and buttons into hardware and software of Arduino Nano.
Developed iOS application, implementing Core Bluetooth functionality and basic UI.
Innovated 3D models with Blender and 3D printed plastic bezel and project box.`

module.exports = { assistantPrompt }