import React, { FC } from 'react';
import OpenSea from '../../assets/images/OpenSea.png';
import Twitter from '../../assets/images/twitter.png';
import Connect from '../../assets/images/connect.png';
import Disconnect from '../../assets/images/disconnect.png';
import Styles from './index.module.css';

const Header = () => {
    return (
        <div className={Styles.header}>
            <img src={OpenSea} alt="opensea" style={{marginRight:'16px'}} />
            <img src={Twitter} alt="twiiter" style={{marginRight:'16px'}} />
            <img src={Connect} alt="connect" style={{marginRight:'16px'}} />
            <img src={Disconnect} alt="disconnect" style={{marginRight:'16px'}} />
        </div >
    );
};


export default Header;
