import Image from 'next/image';
import styles from '../components/Gallery.module.css';
import Constants from '../constants/Constants.js';
import PageTurner from './PageTurner.js';

import { useEffect, useRef } from 'react';

export default function Gallery(params) {
    const { cat, subcat, pgnum, origin, scrollTrigger } = params;

    const paginationRef = useRef(null);

    function scroll() {
        const homeButton = paginationRef.current;
        homeButton.scrollIntoView({
            behavior: "auto"
        });
    };

    useEffect(() => {
        if (scrollTrigger && paginationRef.current) {
            scroll();
        }
    }, [scrollTrigger]);

    const imageKey = Constants.FRIENDLYNAMES.get(subcat);

    const renderTitle = () => {
        if (cat != "magic" && cat != "touhou") {
            return(
                <h1 className={styles.header}>{imageKey}</h1>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
   
    if (imageKey != undefined) {
        return (
            <div>

                <hr/>

                <div className={styles.titlerow}>
                    {renderTitle()}

                    <a
                        className={styles.imagebutton + " " + styles.buttonabout}
                        href="../../../home/landing/0"
                        ref={paginationRef}
                    >
                        <div className={styles.labelshade}>Home</div>
                    </a>
                </div>

                <hr/>

                <PageTurner
                    cat={cat}
                    subcat={subcat}
                    pgnum={pgnum}
                    imageKey={imageKey}
                    origin={origin}
                />

                <hr/>

                <Image
                    src={Constants.IMAGES.get(imageKey)[pgnum]}
                    alt={imageKey + " - Page " + pgnum}
                    className={styles.pageimage}
                >                
                </Image>                        
            </div>
        );
    }
    
};

