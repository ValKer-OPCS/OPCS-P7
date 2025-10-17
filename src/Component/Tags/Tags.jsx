import styles from './styles.module.scss'


const Tags = ({ data }) => {
  return (
    <div className={styles.tags_container} >
        {data.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      
    </div>
  )
};

export default Tags
