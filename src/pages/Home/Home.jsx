import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

import homeBannerImg from '../../Assets/homeBanner.png'

import Banner from '../../Component/Banner/Banner.jsx'
import Card from '../../Component/Card/Card.jsx'


const Home = () => {

  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => setRentals(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Banner image={homeBannerImg} imageAlt={'Banniere du site'}>
        <div className={styles.text_container}>
          <p>Chez vous,&nbsp;</p>
          <p> partout et ailleurs</p>
        </div>
      </Banner>
      <div className={styles.cards_container}>
        {rentals.map((rental, index) => (
          <Link to={`/rental/${rental.id}`} className={styles.link} key={rental.id ? rental.id : index}>
            <Card rental={rental} />
          </Link>
        ))}
      </div>
      
    </main>
  )
}

export default Home