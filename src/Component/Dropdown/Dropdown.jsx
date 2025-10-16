import { useState } from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const Dropdown = ({ title, text, styleVariant }) => {
  const [open, setOpen] = useState(false)

  function toggleDropdown() {
    setOpen(!open)
  }

  const baseClass = styleVariant === 'about' ? 'dropdown_about' : 
                    styleVariant === 'rental' ? 'dropdown_rental' : 'dropdown_about';


  const cls = (element) => styles[`${baseClass}__${element}`]

  return (
    <div className={`${styles[baseClass]} ${open ? cls('open') : ''}`}>
      <div className={cls('title')} onClick={toggleDropdown}>
        <p>{title}</p>
        <i className={`fa-solid fa-chevron-up ${cls('arrow_down')} ${open ? cls('arrow_up') : ''}`}></i>
      </div>

      <div className={cls('text')}>
        <div className={cls('content')}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  styleVariant: PropTypes.oneOf(['about', 'rental']),
}

Dropdown.defaultProps = {
  styleVariant: 'about',
}

export default Dropdown
