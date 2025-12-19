import { ArrowCircleLeft, ArrowCircleRight }  from '@mui/icons-material';
import styles from '../components/PageTurner.module.css';
import Constants from '../constants/Constants.js';
import Image from 'next/image.js';

const pagePadding = 2;

export default function PageTurner(params) {
    const { cat, subcat, pgnum, imageKey, origin } = params;

    const renderPageButton = (i) => {
        const lastPage = Constants.IMAGES.get(imageKey).length - 1;
        const extraLeftPadding = pagePadding * 2 - (lastPage - pgnum) > 0 ? pagePadding * 2 - (lastPage - pgnum) : 0;
        const edgeLeftPadding = pgnum - pagePadding == 2 ? 1 : 0;
        const extraRightPadding = pagePadding * 2 - pgnum > 0 ? pagePadding * 2 - pgnum : 0;
        const edgeRightPadding = lastPage - (pgnum + pagePadding) == 2 ? 1 : 0;        
        if (i == 0 ||
            i == lastPage ||
                (
                    i >= pgnum - pagePadding - extraLeftPadding - edgeLeftPadding &&
                    i <= pgnum + pagePadding + extraRightPadding + edgeRightPadding
                )
            )
        {
            return (
                <a
                    key={"pageturner_" + i}
                    href={origin + "/" + cat + "/" + subcat + "/" + i + "?sd=1"}
                    className={styles.pagebutton + (pgnum == i ? (" " + styles.current) : "")}
                >
                    <Image src={Constants.IMAGES.get(imageKey)[i]} alt={"thumbnail_" + i} className={styles.pagebuttonimage} />
                    <div className={styles.pagenumberdiv}>{i}</div>
                </a>
            );
        } else if ((i == 1 && i < pgnum - pagePadding) || (i == lastPage - 1 && i > pgnum + pagePadding)) {
            return (
                <a
                    key={"pageturner_" + i}                    
                    className={styles.pagebutton}
                    href={origin + "/" + cat + "/" + subcat + "/" + ((i == 1 && i < pgnum - pagePadding) ? pgnum - pagePadding - 1 : pgnum + pagePadding + 1) + "?sd=1"}
                >
                    <div className={styles.placeholder}></div>
                    <div className={styles.ellipsis}>{"..."}</div>
                </a>
            )
        }
    }

    const renderPageNumbers = () => {
        return (
            <div className={styles.buttoncontainer}>
                {
                    Constants.IMAGES.get(imageKey).map((myImage, i) =>
                        renderPageButton(i)
                    )
                }
            </div>
        );
    }

    return (
        <div className={styles.above}>
            <div>
                <div className={styles.numberline}>
                    <a href={origin + "/" + cat + "/" + subcat + "/" + (pgnum == 0 ? Constants.IMAGES.get(imageKey).length - 1 : pgnum - 1) + "?sd=1"}>
                        <ArrowCircleLeft
                            fontSize="large"
                            className={styles.arrowbutton}
                        />
                    </a>
                    {renderPageNumbers()}
                    <a href={origin + "/" + cat + "/" + subcat + "/" + (pgnum == Constants.IMAGES.get(imageKey).length - 1 ? 0 : pgnum + 1) + "?sd=1"}>
                        <ArrowCircleRight
                            fontSize="large"
                            className={styles.arrowbutton}
                        />
                    </a>
                </div>                        
            </div>            
        </div>
    );
};