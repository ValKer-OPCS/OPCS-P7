import styles from './styles.module.scss'
import Slideshow from '../../Component/Slideshow/Slideshow.jsx'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../../Layout/Loader/Loader.jsx';
import Tags from '../../Component/Tags/Tags.jsx';



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

  return (
    <div>
      <Slideshow pictures={rental.pictures} title={rental.title} />

      <div className={styles.title_container} >
        <h2>{rental.title}</h2>
        <p> {rental.location} </p>
      </div>

      <Tags data={rental.tags} />

    

      
    </div>


  );
}

export default Rental;
