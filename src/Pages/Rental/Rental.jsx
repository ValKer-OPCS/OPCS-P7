/* import styles from './styles.module.scss' */
import Slideshow from '../../Component/Slideshow/Slideshow.jsx'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../../Layout/Loader/Loader.jsx';



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
    </div>
  );
}

export default Rental;
