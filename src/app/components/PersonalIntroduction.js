import React from 'react';
import styles from '../style/PersonalIntroduction.module.css';

const PersonalIntroduction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.name}>Zhaochang Zhou</div>
                <div className={styles.university}>Graduate from York University</div>

            </div>
        </div>
    );
};

export default PersonalIntroduction;