import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/About.module.css';

export default function About() {
    return(
        <div className={styles.container}>

            <div className={styles.frogcolumn}>
                <Image src={Constants.FROG} alt="Frog" priority="true"></Image>
            </div>            

            <div className={styles.walloftext}>

                <h1 className={styles.header}>House of Sixten</h1>

                "House of Sixten" is the website of Adrian Ferrer, an
                author, illustrator, and web developer living in San Diego, California (USA). "Sixten" is
                the name of the main character of the Swedish romantic comedy
                movie <a href="https://www.imdb.com/title/tt0111209/"><i>Sixten: Dancing Feet</i></a>, directed
                by Catti Edfeldt. <br/>
                <br/> 
                The symbol of House of Sixten is the Australian Water-Holding
                Frog <a href="https://en.wikipedia.org/wiki/Ranoidea_platycephala"><i>(Ranoidea platycephala)</i></a>, which
                stores up water in its body and burrows underground to survive the dry season.<br/>
                <br/>
                "Hold water" is an expression used to describe not only good bottles and buckets,
                but also good theories and arguments. It is the goal
                of House of Sixten to hold water while also being funny and wholesome
                with a charming round shape.
            </div>

        </div>
    );
}