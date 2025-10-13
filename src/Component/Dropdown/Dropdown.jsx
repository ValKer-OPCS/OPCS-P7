import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'


const Dropdown = ({data}) => {
  const [open, setOpen] = useState(false)

  let url = useLocation()

  function toggleDropdown() {
    setOpen(!open)
  }

  return (
    <div className={`${styles.dropdown} ${ url.pathname === '/about' ? styles.about_dropdown : styles.rental_dropdown }`}>
      <div className={`${styles.dropdown__title}`}>
        <p>{data.title}</p>
        <i className={`fa-solid fa-chevron-up ${styles.dropdown__btn} ${open ? styles.btn_up : ''}`} onClick={toggleDropdown}></i>
      </div>

      <div className={`${styles.dropdown__text} ${open ? styles.down : ''}`}>
        <div className={styles.dropdown__content}>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
