import PropTypes from 'prop-types';

import styles from './styles.module.scss';


/**
 * Rating component renders a star-based rating display.
 *
 * @component
 * @param {object} props - The properties object.
 * @param {number} props.rating - The current rating value. Determines how many stars are filled.
 * @param {string} [props.icon="fa-solid fa-star"] - The CSS classes for the star icon.
 * @param {number} [props.maxRating=5] - The total number of stars to display.
 * @param {string} [props.fillColor="#FF6060"] - The color for filled stars.
 * @param {string} [props.emptyColor="#E3E3E3"] - The color for empty stars.
 */
const Rating = ({ rating, icon = "fa-solid fa-star", maxRating = 5, fillColor = "#FF6060", emptyColor = "#E3E3E3" }) => {


    return (
        <div className={styles.rating}>
            {Array.from({ length: maxRating }, (_, i) => {
                const isFilled = i + 1 <= rating;
                return (
                    <span key={i + 1} style={{ color: isFilled ? fillColor : emptyColor }}>
                        <i className={` ${icon}`}></i>
                    </span>
                );
            })}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    icon: PropTypes.string,
    maxRating: PropTypes.number,
    fillColor: PropTypes.string,
    emptyColor: PropTypes.string,
};

export default Rating;

