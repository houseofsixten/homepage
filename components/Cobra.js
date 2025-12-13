import Image from 'next/image';
import styles from '../components/Cobra.module.css';
import Constants from '../constants/Constants.js';

export default function Cobra() {
    return(
        <div className={styles.container}>

            <div className={styles.thumbnailcolumn}>
                <Image src={Constants.THUMBNAILS.get("Lotus Cobra is Evil")} alt="SATANAS L. DIABLO" className={styles.thumbnail} priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>

                <i>Most Magic players think Lotus Cobra is good. They are wrong.</i>
                <h1 className={styles.header}>Lotus Cobra is Evil</h1>

                The trading card game <i><a href="https://magic.wizards.com/en">Magic the Gathering</a></i> is
                ruled by none other than SATANAS L. DIABLO. Among his many evil creations is the Serpent of Paradise,
                also known as the Lotus Cobra.<br/>
                <br/>
                The Devil, the Serpent, and other forces of evil set out to torment the characters of the Magic universe.
                
            </div>
        </div>
    );
}