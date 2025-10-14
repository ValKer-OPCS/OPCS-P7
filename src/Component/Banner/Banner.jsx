import PropTypes from 'prop-types'
import styles from './styles.module.scss'


const Banner = ({image, imageAlt, overlayOpacity = 0, children}) => {

 
  
  return (
    <div className={styles.banner} style={{ '--overlay-opacity': overlayOpacity }} >
      
      <img src={image} alt={imageAlt}/>
      
      
      {children}     
      
    
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,

}



export default Banner