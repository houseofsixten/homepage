import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/Autumn.module.css';

export default function Autumn() {
    return(
        <div className={styles.container}>

            <div className={styles.thumbnailcolumn}>
                <Image src={Constants.THUMBNAILS.get("Autumn Children")} alt="Violin and Japanese maple leaf" className={styles.thumbnail} priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>
                <i>So there are gods for little things like that too.</i>
                <h1 className={styles.header}>Autumn Children</h1>
                <a href="https://en.wikipedia.org/wiki/Touhou_Project"><i>Touhou Project</i></a> is both a video game series
                and an open source fantasy setting with very few official restrictions on fan-made content. <i>Autumn Children</i> was
                House of Sixten's second story in that setting.<br/>
                <br/>
                Shizuha is the weakest goddess in Gensokyo, with only the power to change the color of leaves.
                She is jealous of her sister Minoriko's greater power and prestige. Will a new friend help Shizuha
                defeat the demon of envy?<br/>
                <br/>
                Named a Hidden Masterpiece <a href="https://www.pixiv.net/en/artworks/32677922">on Pixiv</a>.
            </div>

        </div>
    );
}