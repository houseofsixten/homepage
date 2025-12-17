import { ArrowCircleLeft, ArrowCircleRight }  from '@mui/icons-material';
import styles from '../components/PageTurner.module.css';
import Constants from '../constants/Constants.js';
import Image from 'next/image.js';

const pagePadding = 2;

export default function PageTurner(params) {
    const { cat, subcat, pgnum, setPgnum, imageKey, origin, stateStack, setStateStack } = params;

    const handlePgnumClick = (newPgnum) => {    
        let stack = stateStack;
        stack.push({cat: cat, subcat: subcat, pgnum: pgnum});
        setStateStack(stack);        
        setPgnum(newPgnum);
        window.history.replaceState(null, "House of Sixten", origin + "/" + cat + "/" + subcat + "/" + newPgnum);
    };

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
                <button
                    key={"pageturner_" + i}
                    type="button"
                    onClick={() => handlePgnumClick(i)}
                    className={styles.pagebutton + (pgnum == i ? (" " + styles.current) : "")}
                >
                    <Image src={Constants.IMAGES.get(imageKey)[i]} alt={"thumbnail_" + i} className={styles.pagebuttonimage} />
                    <div className={styles.pagenumberdiv}>{i}</div>
                </button>
            );
        } else if ((i == 1 && i < pgnum - pagePadding) || (i == lastPage - 1 && i > pgnum + pagePadding)) {
            return (
                <button
                    key={"pageturner_" + i}
                    type="button"
                    className={styles.pagebutton}
                    onClick={() => handlePgnumClick((i == 1 && i < pgnum - pagePadding) ? pgnum - pagePadding - 1 : pgnum + pagePadding + 1)}
                >
                    <div className={styles.placeholder}></div>
                    <div className={styles.ellipsis}>{"..."}</div>
                </button>
            )
        }
    }

    const renderPageNumbers = () => {
        return (
            <div>
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
                    <ArrowCircleLeft
                        onClick={() => handlePgnumClick(pgnum == 0 ? Constants.IMAGES.get(imageKey).length - 1 : pgnum - 1)}
                        fontSize="large"
                        className={styles.arrowbutton}
                    />
                    {renderPageNumbers()}
                    <ArrowCircleRight
                        onClick={() => handlePgnumClick(pgnum == Constants.IMAGES.get(imageKey).length - 1 ? 0 : pgnum + 1)}
                        fontSize="large"
                        className={styles.arrowbutton}
                    />
                </div>
                        
            </div>            
        </div>
    );
};