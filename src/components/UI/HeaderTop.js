import React from 'react';

import imageTop from '../../assets/top.jpg'

import styles from './HeaderTop.module.css';

const HeaderTop = () => {
    return (
    <div className={styles.imageTop} > 
    <img src={imageTop} alt='cleochildminding'/>
    </div>
    );
};

export default HeaderTop;