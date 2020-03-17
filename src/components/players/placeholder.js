import React from 'react';

import styles from './placeholder.module.scss';

const Placeholder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.placeholderImage}><span>Select a Player for details</span></div>
            <div className={styles.underline} />
            <div className={styles.box}>
                <div className={styles.barContainer}>
                    <div className={styles.barOne} />
                    <div className={styles.barTwo} /> 
                    <div className={styles.barThree} />
                </div>
                <div className={styles.circle} />
            </div>
        </div>
    );
}

export default Placeholder;