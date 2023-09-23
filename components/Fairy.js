import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/Fairy.module.css';

export default function Fairy() {
    return(
        <div className={styles.container}>

            <div className={styles.thumbnailcolumn}>
                <Image src={Constants.THUMBNAILS.get("Fairy Ring")} alt="Tsubaki Shrine" className={styles.thumbnail} layout="responsive" priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>
                <h1 className={styles.header}>Fairy Ring</h1>
                <a href="https://en.wikipedia.org/wiki/Touhou_Project"><i>Touhou Project</i></a> is both a video game series
                and an open source fantasy setting with very few official restrictions on fan-made content. <i>Fairy Ring</i> was
                House of Sixten's first attempt at creating a story for that setting.<br/>
                <br/>
                Weakened by the declining faith of Japan, Shinto goddess Suwako moves from our world to Touhou's world of Gensokyo.
                There she befriends Cirno the ice fairy, a Gensokyo native.
            </div>

        </div>
    );
}