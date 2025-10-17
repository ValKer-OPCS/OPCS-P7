import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Loader from '../Loader/Loader.jsx'

import Card from '../../Component/Card/Card.jsx'


const CardContainer = () => {

  const [rentals, setRentals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/rentals.json')
      .then((response) => response.json())
      .then((data) => setRentals(data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => setLoading(false), 500)
      })
  }, [])


  return (
    <div className={`${styles.cards_container} ${loading && styles.loading_container}`}>
      {loading ? (<Loader />) :

        (rentals.map((rental, index) => (
          <Link to={`/rental/${rental.id}`} className={styles.link} key={rental.id ? rental.id : index} state={{ rental }} >

            <Card cover={rental.cover} title={rental.title} type='home_card' />

          </Link>
        ))
        )}
    </div>
  )
};

export default CardContainer
