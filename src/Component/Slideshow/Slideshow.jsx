import { useState } from "react";
import Arrow from "../Arrow/Arrow.jsx";
import styles from "./styles.module.scss";

const Slideshow = ({ pictures, title, fadeDuration = 500 }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [nextImage, setNextImage] = useState(null);

    const showNextImage = () => {
        const newIndex = currentImage === pictures.length - 1 ? 0 : currentImage + 1;
        setNextImage(newIndex);
        setTimeout(() => {
            setCurrentImage(newIndex);
            setNextImage(null);
        }, fadeDuration);
    };

    const showPreviousImage = () => {
        const newIndex = currentImage === 0 ? pictures.length - 1 : currentImage - 1;
        setNextImage(newIndex);
        setTimeout(() => {
            setCurrentImage(newIndex);
            setNextImage(null);
        }, fadeDuration);
    };

    const hasMultipleImages = pictures.length > 1;

    return (
        <div className={styles.slideshow}>
            <div className={styles.imageWrapper}>
                <img src={pictures[currentImage]} alt={title} className={styles.current} />
                {nextImage !== null && (
                    <img src={pictures[nextImage]} alt={title} className={styles.next} />
                )}
            </div>

            {hasMultipleImages && (
                <>
                    <span onClick={showPreviousImage} className={styles.arrowLeft}>
                        <Arrow rotation="0" />
                    </span>
                    <span onClick={showNextImage} className={styles.arrowRight}>
                        <Arrow rotation="180" />
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
