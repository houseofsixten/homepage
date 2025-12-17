import Image from 'next/image';
import styles from '../components/Gallery.module.css';
import Constants from '../constants/Constants.js';
import PageTurner from './PageTurner.js';

export default function Gallery(params) {
    const { cat, subcat, pgnum, setPgnum, origin, stateStack, setStateStack } = params;

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
                    >
                        <div className={styles.labelshade}>Home</div>
                    </a>
                </div>

                <hr/>

                <PageTurner
                    cat={cat}
                    subcat={subcat}
                    pgnum={pgnum}
                    setPgnum={setPgnum}
                    imageKey={imageKey}
                    origin={origin}
                    stateStack={stateStack}
                    setStateStack={setStateStack}
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

