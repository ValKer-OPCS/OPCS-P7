import PropTypes from 'prop-types'


/**
 * Card component that displays an image with a title.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.cover - Source URL for the image cover. Must be a valid image URL.
 * @param {string} props.title - Title displayed as the card's caption.
 * @param {Object} props.styles - Object containing the style definitions (e.g., a CSS modules object) for the card.
 *
 * @returns {JSX.Element} A rendered Card component.
 */
const Card = ({ cover, title, styles }) => {


  return (

    <figure className={styles.card}>
      <img src={cover} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>

  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default Card
