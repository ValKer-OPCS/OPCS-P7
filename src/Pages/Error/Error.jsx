import { Link } from 'react-router-dom'
import styles from './styles.module.scss'



const Error = () => {
  return (
    <main className={styles.error}>
      <div className={styles.message}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className={styles.message__link}>
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  )
};

export default Error
