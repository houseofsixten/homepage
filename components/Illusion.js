import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/Illusion.module.css';

export default function Illusion() {
    return(
        <div className={styles.container}>

            <div className={styles.thumbnailcolumn}>
                <Image src={Constants.THUMBNAILS.get("Use Your Illusion")} alt="Gun, rose, and sword" layout="responsive" className={styles.thumbnail} priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>                
                <h1 className={styles.header}>Use Your Illusion</h1>
                <a href="https://en.wikipedia.org/wiki/Touhou_Project"><i>Touhou Project</i></a> is both a video game series
                and an open source fantasy setting with very few official restrictions on fan-made content. <i>Use Your Illusion</i> was
                House of Sixten's third story for that setting.<br/>
                <br/>
                Reisen is an immigrant worker, crushed under her unfair job and abusive boss.
                Reisen's friend Youmu offers Reisen a path to an easier life.
                But that path is paved with lies, or shall we say, illusions.
            </div>

        </div>
    );
}