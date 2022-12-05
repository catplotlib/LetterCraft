// Make a footer saying 'Made by catplotlib' that links to the github repo  
// and the catplotlib website

import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>Made by catplotlib ❤️</p>
        </div>
    );
    }

export default Footer;
