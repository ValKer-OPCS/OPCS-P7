
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Card = ({ rental }) => {
    return (
        
            <figure className={styles.card}>
                <img src={rental.cover} alt={rental.title} />
                <figcaption>{rental.title}</figcaption>
            </figure>
        
    )
}

Card.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
}


export default Card
