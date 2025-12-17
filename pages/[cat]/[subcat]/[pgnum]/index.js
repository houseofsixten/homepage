import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../../../components/Nav';
import Content from '../../../../components/Content';
import Head from 'next/head';
import styles from './index.module.css'

export default function Index() {
    const [cat, setCat] = useState("");
    const [subcat, setSubcat] = useState("");
    const [pgnum, setPgnum] = useState(0);
    const [origin, setOrigin] = useState("");
    const [stateStack, setStateStack] = useState([]);

    useEffect(() => {
        setOrigin(window.location.origin);
    });

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            if (stateStack.length > 0) {
                const topOfStack = stateStack.pop();
                setCat(topOfStack.cat);
                setSubcat(topOfStack.subcat);
                setPgnum(topOfStack.pgnum);
                window.history.replaceState(null, "House of Sixten", origin + "/" + topOfStack.cat + "/" + topOfStack.subcat + "/" + topOfStack.pgnum);
            } else {
                window.history.back();
            }
        };

        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener("popstate", handleBackButton);

        return () => {
        window.removeEventListener("popstate", handleBackButton);
        };
    }, []);


    const router = useRouter();

    useEffect(() => {
        if(router.isReady) {
            setCat(router.query.cat.toLowerCase());
            setSubcat(router.query.subcat.toLowerCase());
            setPgnum(Number(router.query.pgnum));
        }

    }, [router.isReady]);

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
                            setCat("home");
                            setSubcat("landing");
                            window.history.replaceState(null, "House of Sixten", origin + "/home/landing/0");
                        }}
                    >
                    </button> 

                    <Nav
                        cat={cat}
                        setCat={setCat}
                        subcat={subcat}
                        setSubcat={setSubcat}
                        pgnum={pgnum}
                        setPgnum={setPgnum}
                        origin={origin}
                        stateStack={stateStack}
                        setStateStack={setStateStack}
                    />

                    <div className={styles.dropshadow}></div>

                    <div className={styles.content}>  
                        <Content
                            cat={cat}
                            setCat={setCat}
                            subcat={subcat}
                            setSubcat={setSubcat}
                            pgnum={pgnum}
                            setPgnum={setPgnum}
                            origin={origin}
                            stateStack={stateStack}
                            setStateStack={setStateStack}
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
