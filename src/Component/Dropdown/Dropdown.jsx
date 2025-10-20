import { useState } from 'react'
import PropTypes from 'prop-types'


/**
 * Dropdown functional component that toggles the visibility of its children when the title is clicked.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title displayed in the dropdown header.
 * @param {React.ReactNode} props.children - The content displayed within the dropdown.
 * @param {Object} props.styles - An object containing CSS class names for styling the component.
 *
 *
 * @returns {JSX.Element} A JSX element representing the dropdown.
 */
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
  styles: PropTypes.object.isRequired
}

export default Dropdown
