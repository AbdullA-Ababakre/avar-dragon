import React, { FC } from 'react';
import Header from '../Header/index';
import Styles from './index.module.css';
import Slogan from '../../assets/images/slogan.png';
import Astronaut from '../../assets/images/astronat.png';
import MintCard from '../../assets/images/mintCard.png';

const Banner = () => {
    return (
        <div className={Styles.banner}>
            <Header />
            <img className={Styles.slogan} src={Slogan} alt="opensea" style={{ marginRight: '16px' }} />
            <img className={Styles.astronaut} src={Astronaut} alt="opensea" style={{ marginRight: '16px' }} />
            <img className={Styles.mintCard} src={MintCard} alt="opensea" style={{ marginRight: '16px' }} />
        </div >
    );
};


export default Banner;
