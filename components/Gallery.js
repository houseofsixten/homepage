import { useState } from 'react';
import Constants from '../constants/Constants.js';
import About from '../components/About.js';
import Cobra from '../components/Cobra.js';
import Fairy from '../components/Fairy.js';
import Autumn from '../components/Autumn.js';
import Illusion from '../components/Illusion.js';
import Ephemeral from '../components/Ephemeral.js';
import PageTurner from '../components/PageTurner.js';
import Image from 'next/image';
import styles from '../components/Gallery.module.css';
import Dialog from '@mui/material/Dialog';
import { ArrowCircleLeft, ArrowCircleRight }  from '@mui/icons-material';

export default function Gallery(params) {
    const [open, setOpen] = useState(false);
    const [imageNumber, setImageNumber] = useState(0);    

    const handleClickOpen = (e) => {
        setImageNumber(parseInt(e.target.attributes.value.value));
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);        
      };

    const images = Constants.IMAGES.has(params.subCat) ? Constants.IMAGES.get(params.subCat) : null;
    
    const pageCount = images == null ? null :
                        images.length % Constants.GALLERYSIZE == 0 ? images.length / Constants.GALLERYSIZE :
                                                                    Math.floor(images.length / Constants.GALLERYSIZE) + 1;
    
    const handlePageRight = () => {
        if (images != null)
        {
            if (params.pageNumber + 1 >= pageCount)
            {
                params.setPageNumber(0);
            }
            else
            {
                params.setPageNumber(params.pageNumber + 1);
            }
        }
    };

    const handlePageLeft = () => {
        if (images != null)
        {
            if (params.pageNumber - 1 < 0)
            {
                params.setPageNumber(pageCount - 1);
            }
            else
            {
                params.setPageNumber(params.pageNumber - 1);
            }
        }
    };

    const imageCount = images != null ? images.length : null;
    const startPage = images != null ? (params.pageNumber * Constants.GALLERYSIZE) + 1 : null;
    const endPage = images != null ? Math.min((params.pageNumber + 1) * Constants.GALLERYSIZE, images.length) : null;

    var imagePage = -1;

    const thumbnails = images != null ? 
    Array.from(Constants.IMAGES.get(params.subCat)).map(function(key)
    {   
        imagePage++;

        if (imagePage + 1 >= startPage && imagePage + 1 <= endPage)
        {
        return (<div className={styles.thumbnailholder} key={key.src}>
                <Image src={key} alt="Gallery thumbnail" value={imagePage} className={styles.thumbnail} onClick={handleClickOpen} />
            </div>);
        }
        else
        {
            return null;        
        }
    }) :
    null;
    
    const homeText = params.subCat == "About" ? (<About/>)
                        : params.subCat == "Lotus Cobra is Evil" ? (<Cobra/>)
                        : params.subCat == "Fairy Ring" ? (<Fairy/>)
                        : params.subCat == "Autumn Children" ? (<Autumn/>)
                        : params.subCat == "Use Your Illusion" ? (<Illusion/>)
                        : params.subCat == "Ephemeral Unnatural Balance" ? (<Ephemeral/>)
                        : null;
    
    return (
        <div>
            {homeText}
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                <PageTurner
                    images={images}
                    imageNumber={imageNumber}
                    setImageNumber={setImageNumber}
                    handleClose={handleClose}
                    pageLeft={handlePageLeft}
                    pageRight={handlePageRight}
                     />
            </Dialog>            
            {thumbnails}            
            <div className={images != null ? styles.paginator : styles.invisible}>
                <ArrowCircleLeft onClick={handlePageLeft} fontSize="large"/>
                    <div className={styles.pagelabel}>Images {startPage} to {endPage} of {imageCount}</div>
                <ArrowCircleRight onClick={handlePageRight} fontSize="large"/>
            </div>                            
        </div>
    );
};

