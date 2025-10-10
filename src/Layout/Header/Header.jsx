import { NavLink } from 'react-router-dom'


import styles from './styles.module.scss'
import headerImg from '../../Assets/logoKasa.png'

function Header() {


  return (
    <header className={`${styles.header}`}>

      <div className={`${styles.header__container}`}>

        <img className={`${styles.header__logo}`} src={headerImg} alt="Logo de l'entreprise Kasa" />

        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined }>Accueil</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined } >A Propos</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header