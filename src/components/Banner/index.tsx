import React, { FC, useState } from 'react';
import Header from '../Header/index';
import Styles from './index.module.css';
import Slogan from '../../assets/images/slogan.png';
import Astronaut from '../../assets/images/astronat.png';
import MintCard from '../../assets/images/mintCard.png';
import OpenSea from '../../assets/images/OpenSea.png';
import Twitter from '../../assets/images/twitter.png';
import ConnectImg from '../../assets/images/connect.png';
import Disconnect from '../../assets/images/disconnect.png';
import ConnectButton from '../ConnectButton';
import MintButton from "../MintButton";
import Mint from "../Mint";

const Banner = () => {
    const [connect, setConnect] = useState()
    const [mintCount, setMintCount] = useState()

    const Connect = (e: any) => {
        setConnect(e)
    }

    const Count = (e: any) => {
        setMintCount(e)
    }

    return (
        <div className={Styles.banner}>
            <div className={Styles.header}>
                <img src={OpenSea} alt="opensea" style={{ marginRight: '16px' }} />
                <img src={Twitter} alt="twiiter" style={{ marginRight: '16px' }} />
                <ConnectButton className="buttonRight" connect={Connect} mintcount={Count} />
                {/* <img src={ConnectImg} alt="connect" style={{ marginRight: '16px' }} />
                <img src={Disconnect} alt="disconnect" style={{ marginRight: '16px' }} /> */}
            </div >
            {/* <img className={Styles.slogan} src={Slogan} alt="opensea" style={{ marginRight: '16px' }} /> */}
            {/* <MintButton connect={connect} mintcount={mintCount} /> */}
            <Mint connect={connect} mintcount={mintCount} />
            <img className={Styles.astronaut} src={Astronaut} alt="opensea" style={{ marginRight: '16px' }} />
        </div >
    );
};


export default Banner;
