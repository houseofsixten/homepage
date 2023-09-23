import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/Ephemeral.module.css';

export default function Ephemeral() {
    return(
        <div className={styles.container}>

            <div className={styles.thumbnailcolumn}>
                <Image src={Constants.THUMBNAILS.get("Ephemeral Unnatural Balance")} alt="Main menu of game with Rin Satsuki" layout="responsive" className={styles.thumbnail} priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>
                <h1 className={styles.header}>Ephemeral Unnatural Balance</h1>
                <a href="https://en.wikipedia.org/wiki/Touhou_Project"><i>Touhou Project</i></a> is both a video game series
                and an open source fantasy setting with very few official restrictions on fan-made
                content. <a href="https://store.steampowered.com/app/834580/__Ephemeral_Unnatural_Balance/"><i>Ephemeral Unnatural Balance</i></a> is
                a Touhou fangame developed by Ephemeral Entertainment, using character portraits and cutscene illustrations
                by House of Sixten.
            </div>

        </div>
    );
}