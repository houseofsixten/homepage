import Constants from '../constants/Constants.js';
import Image from 'next/image';
import styles from '../components/About.module.css';
import twittericon from '../images/twitter_icon.jpg';
import pixivicon from '../images/pixiv_icon.jpg';
import guuicon from '../images/guu_icon.jpg';

export default function About() {
    return(
        <div className={styles.container}>

            <div className={styles.frogcolumn}>
                <Image src={Constants.FROG} alt="Frog" priority="true" layout="responsive" />
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
                with a charming round shape.<br/>
                <br/>

                <div className={styles.contact}>
                    <a href="http://www.twitter.com/houseofsixten"><Image src={twittericon} alt="twitter" height="20" width="20"/></a>
                    &nbsp;
                    <a href="http://www.twitter.com/houseofsixten">twitter: houseofsixten</a>
                </div>

                <div className={styles.contact}>
                    <a href="https://www.pixiv.net/en/users/1976644"><Image src={pixivicon} alt="pixiv" height="20" width="20"/></a>
                    &nbsp;
                    <a href="https://www.pixiv.net/en/users/1976644">pixiv: sixten</a>
                </div>
                
                <div className={styles.contact}>
                    <Image src={guuicon} alt="Guu from Hare Guu" height="20" width="20"/>&nbsp;
                    <span className={styles.email}>guuonearth at yahoo dot com</span>
                </div>
                
            </div>

        </div>
    );
}