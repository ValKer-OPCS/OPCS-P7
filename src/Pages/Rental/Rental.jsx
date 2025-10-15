/* import styles from './styles.module.scss' */
import Slideshow from '../../Component/Slideshow/Slideshow.jsx'
import { useParams , useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../../Component/Loader/Loader.jsx';



const Rental = () => {
  const { id } = useParams();
  const location = useLocation();
  const [rental, setRental] = useState(location.state?.rental || null);

  useEffect(() => {
    if (!rental) {
      fetch("/logements.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item.id === id);
          setRental(found);
        })
        .catch((err) => console.error(err));
    }
  }, [id, rental]);

  if (!rental) {
    return <Loader />;
  }

  return (
    <div>
      <Slideshow pictures={rental.pictures} title={rental.title} />
    </div>
  );
}

export default Rental;
