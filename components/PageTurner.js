import { ArrowCircleLeft, ArrowCircleRight, Cancel }  from '@mui/icons-material';
import Image from 'next/image';
import styles from '../components/PageTurner.module.css';
import Constants from '../constants/Constants.js';

export default function PageTurner(params) {

    const imagepath = params.images != null ? params.images[params.imageNumber] : null;
    const imageCount = params.images != null ? params.images.length : 0;    

    const handleImageRight = () => {
        if (params.imageNumber + 1 >= imageCount)
        {
            params.pageRight();
            params.setImageNumber(0);            
        }
        else
        {
            if (Math.floor((params.imageNumber + 1) / Constants.GALLERYSIZE) > Math.floor(params.imageNumber / Constants.GALLERYSIZE) )
            {
                params.pageRight();
            }

            params.setImageNumber(params.imageNumber + 1);
        }
    };
    
    const handleImageLeft = () => {
        if (params.imageNumber - 1 < 0)
        {
            params.pageLeft();
            params.setImageNumber(Math.max(imageCount - 1, 0));
        }
        else
        {
            if (Math.floor((params.imageNumber - 1) / Constants.GALLERYSIZE) < Math.floor(params.imageNumber / Constants.GALLERYSIZE) )
            {
                params.pageLeft();
            }

            params.setImageNumber(params.imageNumber - 1);
        }
    };

    const galleryAlt = `Gallery image ${params.imageNumber}`;

    const currentImage = imagepath != null ? <Image src={imagepath} alt={galleryAlt} className={styles.currentimage} onClick={handleImageRight}/> : null;

    return (
        <div className={styles.above}>            
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan="3" className={styles.pageleft} onClick={handleImageLeft}>
                                <ArrowCircleLeft onClick={handleImageLeft} fontSize="large"/>
                            </td>
                            <td>                    
                                <Cancel onClick={params.handleClose} fontSize="large"/>
                            </td>                
                            <td rowSpan="3" className={styles.pageright} onClick={handleImageRight}>
                                <ArrowCircleRight onClick={handleImageRight} fontSize="large"/>                
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.containerholder}>
                                <div className={styles.imagecontainer}>
                                    {currentImage}
                                </div>
                            </td>                    
                        </tr>
                        <tr>
                            <td className={styles.paginatorholder}>
                                <div className={imagepath != null ? styles.bottomarrows : styles.invisible}>                
                                    <ArrowCircleLeft onClick={handleImageLeft} fontSize="large"/>
                                    <span className={styles.pagelabel}>Page {params.imageNumber + 1} of {imageCount}</span>
                                    <ArrowCircleRight onClick={handleImageRight} fontSize="large"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>
    );
};