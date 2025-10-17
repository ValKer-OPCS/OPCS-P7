import { useState } from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const Dropdown = ({ title, children, styleVariant }) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!open)

  const baseClass = styleVariant === 'about'? 'dropdown_about': 
                    styleVariant === 'rental' ? 'dropdown_rental' : 'dropdown_about'

  return (
    <div className={`${styles[baseClass]} ${open ? styles.open : ''}`}>
      <div className={styles[`${baseClass}__title`]} onClick={toggleDropdown}>
        <p>{title}</p>
        <i className={`fa-solid fa-chevron-up ${ styles[`${baseClass}__arrow_down`] } ${open ? styles.openArrow : ''}`} ></i>
      </div>

      <div className={styles[`${baseClass}__text`]}>
        <div className={styles[`${baseClass}__content`]}>{children}</div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styleVariant: PropTypes.oneOf(['about', 'rental']),
}

Dropdown.defaultProps = {
  styleVariant: 'about',
}

export default Dropdown
