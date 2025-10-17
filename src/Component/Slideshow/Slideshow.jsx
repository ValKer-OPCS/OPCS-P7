import { useState } from "react";
import Arrow from "../Arrow/Arrow.jsx";
import styles from "./styles.module.scss";

const Slideshow = ({ pictures, title }) => {


    
    const [currentImage, setCurrentImage] = useState(0);

    const showNextImage = () => {
        setCurrentImage(currentImage === pictures.length - 1 ? 0 : currentImage + 1);
    };

    const showPreviousImage = () => {
        setCurrentImage(currentImage === 0 ? pictures.length - 1 : currentImage - 1);
    };

    const hasMultipleImages = pictures.length > 1;

    return (
        <div className={styles.slideshow}>
            <div className={styles.imageWrapper}>
                <img src={pictures[currentImage]} alt={title} />
            </div>

            {hasMultipleImages && (
                <>
                    <span onClick={showPreviousImage} className={styles.arrowLeft}>
                        <Arrow rotation='0' />
                    </span>
                    <span onClick={showNextImage} className={styles.arrowRight}>
                        <Arrow rotation='180' />
                    </span>

                    <p className={styles.counter}>
                        {currentImage + 1} / {pictures.length}
                    </p>
                </>
            )}
        </div>
    );
};

export default Slideshow;
