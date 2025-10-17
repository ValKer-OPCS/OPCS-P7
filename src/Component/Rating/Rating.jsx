import PropTypes from 'prop-types';
import styles from './styles.module.scss';

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
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string,
    maxRating: PropTypes.number,
    fillColor: PropTypes.string,
    emptyColor: PropTypes.string,
};

export default Rating;

