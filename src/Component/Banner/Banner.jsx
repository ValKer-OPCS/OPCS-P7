import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.scss'


const Banner = ({image, imageAlt, children}) => {
  let url = useLocation()
 
  
  return (
    <div className={`${styles.banner} ${url.pathname === '/about' ? styles.about_banner : styles.home_banner}`}>

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