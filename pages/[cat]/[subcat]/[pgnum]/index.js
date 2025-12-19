import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../../../components/Nav';
import Content from '../../../../components/Content';
import Head from 'next/head';
import styles from './index.module.css';
import { useSearchParams } from 'next/navigation';

export default function Index() {
    const [cat, setCat] = useState("");
    const [subcat, setSubcat] = useState("");
    const [pgnum, setPgnum] = useState(0);
    const [origin, setOrigin] = useState("");
    const [scrollTrigger, setScrollTrigger] = useState(false);

    useEffect(() => {
        setOrigin(window.location.origin);
    });

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if(router.isReady) {
            const initCat = router.query.cat.toLowerCase();
            const initSubcat = router.query.subcat.toLowerCase();
            const initPgnum = router.query.pgnum;
            setCat(initCat);
            setSubcat(initSubcat);
            setPgnum(Number(initPgnum));

            const sd = searchParams.get("sd");
            if (sd != null) {
                setScrollTrigger(true);
            }
        }

    }, [searchParams, router.isReady]);

    return (
        <div className={styles.overall}>
            <Head>
                <title>House of Sixten</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main className={styles.overallexpand}>
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

                    <button
                        className={styles.frogheader}
                        onClick={() => {
                            window.location.href = (origin + "/home/landing/0");
                        }}
                    >
                    </button> 

                    <Nav
                        cat={cat}                        
                        subcat={subcat}
                        origin={origin}
                    />

                    <div className={styles.dropshadow}></div>

                    <div className={styles.content}>  
                        <Content
                            cat={cat}                            
                            subcat={subcat}
                            pgnum={pgnum}
                            origin={origin}
                            scrollTrigger={scrollTrigger}
                        />
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
