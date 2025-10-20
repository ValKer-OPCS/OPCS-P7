import PropTypes from 'prop-types'
import styles from './styles.module.scss'


/**
 * Card component that displays an image with a title.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.cover - The source URL of the image to be displayed.
 * @param {string} props.title - The title of the card.
 * @param {string} props.type - The style type used to assign a specific class to the figure element.
 * @returns {JSX.Element} A card element consisting of an image and its corresponding title.
 */
const Card = ({ cover, title, type }) => {


  return (

    <figure className={styles[type]}>
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
