import PropTypes from 'prop-types'

import styles from './styles.module.scss'


/**
 * Banner component displays a background image with an optional overlay and renders any children.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.image - The URL for the banner image.
 * @param {string} props.imageAlt - The alternative text for the banner image.
 * @param {number} [props.overlayOpacity=0] - Optional overlay opacity value.
 * @param {React.ReactNode} [props.children] - Optional children elements to render within the banner.
 * @returns {JSX.Element} The rendered Banner component.
 */
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
  overlayOpacity: PropTypes.number,
  children: PropTypes.node
}



export default Banner