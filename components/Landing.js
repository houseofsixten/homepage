import Constants from "../constants/Constants.js";
import Image from 'next/image';
import styles from '../components/Landing.module.css';
import lcie10 from '../images/magic/lotuscobraisevil/lcie10.jpg';
import autumn from '../images/touhou/autumnchildren/page000.jpg';
import archive from '../images/bluearchive/trinidad/hifumi-casa.jpg';

export default function Landing() {

    return(
        <div className={styles.container}>

            <h1 className={styles.header}>House of Sixten</h1>

            Welcome to the House of Sixten. Select one of the popular categories below, or use the tabs above to select another category.<br/>
            <br/>

            <div className={styles.imagerow}>                
                <a href={Constants.PATHS.get("Lotus Cobra is Evil")}>
                    <div>Lotus Cobra is Evil</div>
                    <Image src={lcie10} alt="Lotus Cobra is Evil" priority="true" className={styles.cobrasplash}/>
                </a>    
            </div>

            <div className={styles.imagerow}>
                <div>
                    <div><a href={Constants.PATHS.get("Autumn Children")}>Autumn Children</a></div>
                    <a href={Constants.PATHS.get("Autumn Children")}><Image src={autumn} alt="Autumn Children" priority="true" className={styles.autumnsplash}/></a>                    
                </div>
                <div>
                    <div><a href={Constants.PATHS.get("Escuela Trinidad")}>Mexican Hifumi</a></div>
                    <a href={Constants.PATHS.get("Escuela Trinidad")}><Image src={archive} alt="Mexican Hifumi" priority="true" className={styles.archivesplash}/></a>                        
                    
                </div>
            </div>

        </div>
    );
}