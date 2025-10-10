import PropTypes from 'prop-types'
import styles from './styles.module.scss'


const Banner = ({image, imageAlt, children}) => {
 
  
  return (
    <div className={styles.home_banner}>

      <img src={image} alt={imageAlt} />
      {children}
      
    
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,

}



export default Banner