import  { useState } from 'react';
import Styles from './index.module.css';
import ConnectButton from '../ConnectButton';
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
                <ConnectButton className="buttonRight" connect={Connect} mintcount={Count} />
            </div >
            <Mint connect={connect} mintcount={mintCount} />
        </div >
    );
};


export default Banner;
