import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Card = ({ cover, title }) => {
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
};


export default Card
