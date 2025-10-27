import { useState, useEffect } from "react";
import Arrow from "../Arrow/Arrow.jsx";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";


/**
 * Slideshow component displays a series of images with a fade transition effect.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string[]} props.pictures - An array of image URLs to be displayed.
 * @param {string} props.title - The title used for the image alt attribute.
 * @param {number} [props.fadeDuration=500] - The duration in milliseconds for the fade transition.
 * @returns {JSX.Element} The rendered slideshow component.
 */
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

    useEffect(() => {
        pictures.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [pictures]);

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

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    fadeDuration: PropTypes.number,
};

Slideshow.defaultProps = {
    fadeDuration: 500,
};

export default Slideshow;
