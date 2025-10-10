import logo from '../../Assets/logoKasaWhite.png'
import styles from './styles.module.scss'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <img src={logo} alt="Logo Kasa avec une maison à la place du a" />
                <p>© {year} Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer