import styles from './styles.module.scss'
import rentalStyles from '../../Component/Dropdown/DropdownRental.module.scss'
import hostCard from '../../Component/Card/HostCard.module.scss'

import Slideshow from '../../Component/Slideshow/Slideshow.jsx'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../../Layout/Loader/Loader.jsx';
import Tags from '../../Component/Tags/Tags.jsx';
import Dropdown from '../../Component/Dropdown/Dropdown.jsx'
import Card from '../../Component/Card/Card.jsx'
import Rating from '../../Component/Rating/Rating.jsx'



const Rental = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [rental, setRental] = useState(location.state?.rental || null);

  useEffect(() => {
    if (!rental) {
      fetch("/rentals.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item.id === id);
          if (!found) {
            navigate("/Error", { replace: true });
            return;
          }
          setRental(found);
        })
        .catch((err) => console.error(err));
    }
  }, [id, rental, navigate]);

  if (!rental) {
    return <Loader />;
  }

  const { host } = rental;

  return (
    <main>
      <div>
        <Slideshow pictures={rental.pictures} title={rental.title} fadeDuration="100" />

        <div className={styles.content}>
          <div className={styles.title_container} >
            <h2>{rental.title}</h2>
            <p> {rental.location} </p>
          </div>
          <div className={styles.card_rating}>
            <Card cover={host.picture} title={host.name} styles={hostCard} />
            <Rating rating={rental.rating} icon="fa-solid fa-star" maxRating={5} fillColor="#FF6060" emptyColor="#E3E3E3" />

          </div>
          <div className={styles.tags_container} >
            <Tags data={rental.tags} />
          </div>

        </div>




        <div className={styles.dropdown_container} >
          <Dropdown title="Description" styles={rentalStyles}>
            <p>
              {rental.description}
            </p>
          </Dropdown>
          <Dropdown title="Équipements" styles={rentalStyles}>
            <ul>
              {rental.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Dropdown>
        </div>



      </div>
    </main>


  );
}

export default Rental;
