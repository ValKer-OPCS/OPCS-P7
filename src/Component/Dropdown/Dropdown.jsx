import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'
import PropTypes from 'prop-types'


const Dropdown = ({title, text}) => {
  const [open, setOpen] = useState(false)

  let url = useLocation()

  function toggleDropdown() {
    setOpen(!open)
  }

  return (
    <div className={`${styles.dropdown} ${ url.pathname === '/about' ? styles.about_dropdown : styles.rental_dropdown }`}>
      <div className={`${styles.dropdown__title}`}>
        <p>{title}</p>
        <i className={`fa-solid fa-chevron-up ${styles.dropdown__arrow_down} ${open ? styles.arrow_up : ''}`} onClick={toggleDropdown}></i>
      </div>

      <div className={`${styles.dropdown__text} ${open ? styles.drop_open : ''}`}>
        <div className={styles.dropdown__content}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Dropdown
