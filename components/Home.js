import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../components/Home.module.css'

export default function Home(params) {
  return (
    <div>
      <Head>
        <title>House of Sixten</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
      <div className={styles.comicrepeat}>

      <div className={styles.greenbarnarrow}></div>
      <div className={styles.dropshadow}></div>
      <div className={styles.greenbarwide}>
          <div className={styles.headerindent}>
            House of Sixten
          </div>
      </div>
      <div className={styles.dropshadow}></div>
      <div className={styles.greenbarnarrow}></div>
      <div className={styles.dropshadow}></div>

      <div className="content">            
        <div className={styles.frogheader}></div>    
        <Nav initCat={params.initCat} initSubCat={params.initSubCat}/>
      </div>

      <div className={styles.greenbarmedium}></div>
      <div className={styles.dropshadow}></div>
      <div className={styles.greenbarnarrow}></div>
      <div className={styles.dropshadow}></div>

      </div> 
      </main>  
    </div>
  );
}
