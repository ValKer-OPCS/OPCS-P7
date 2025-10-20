import { useState } from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ title, children, styles }) => {
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => setOpen(!open)


  return (
     <div className={`${styles.dropdown} ${open ? styles.open : ''}`}>
      <div className={styles.dropdown__title} onClick={toggleDropdown}>
        <p>{title}</p>
        <i className={`${styles.arrow} ${open ? styles.openArrow : ''} fa-solid fa-chevron-up`} />
      </div>

      <div className={styles.dropdown__text}>
        <div className={styles.dropdown__content}>{children}</div>
      </div>
    </div>

  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.object.isRequired,
}

export default Dropdown
