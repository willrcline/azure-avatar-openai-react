import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import Colors from "../../helper/Colors";

const IconRow = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = require('../../assets/Resume.pdf');
        link.download = 'Resume.pdf';
        link.click();
    };

    return (
        <span>
            <a href="https://www.linkedin.com/in/willrcline">
                <FaLinkedin size={30} style={styles.iconStyle} />
            </a>
            <a href="https://www.github.com/willrcline">
                <FaGithub size={30} style={styles.iconStyle} />
            </a>
            <HiDocumentArrowDown
                size={30}
                style={styles.iconStyle}
                onClick={handleDownload}
                title="Download CV" // Tooltip text on hover
            />
        </span>
    );
};

const styles = {
    iconStyle: {
        cursor: "pointer",
        marginLeft: "2px",
        marginRight: "2px",
        color: Colors.warmBlack
    }
}

export default IconRow;