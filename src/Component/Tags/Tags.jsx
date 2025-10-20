import styles from './styles.module.scss'
import PropTypes from 'prop-types'


/**
 * Renders a list of tags.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.data - An array of tag strings to display.
 * @returns {JSX.Element} A container element displaying a list of tags.
 */
const Tags = ({ data }) => {
  return (
    <div className={styles.tags_container} >
        {data.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      
    </div>
  )
};

Tags.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Tags
