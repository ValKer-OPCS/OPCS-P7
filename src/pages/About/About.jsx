import aboutBannerImg from '../../Assets/aboutBanner.png'
import Banner from '../../Component/Banner/Banner.jsx'
import Dropdown from '../../Component/Dropdown/Dropdown.jsx'
/* import styles from './styles.module.scss' */
import { useState, useEffect } from 'react'


const About = () => {


const [dropdownText, setDropdownText] = useState([]);

  useEffect(() => {
    fetch('/about.json')
      .then((response) => response.json())
      .then((data) => setDropdownText(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
        <Banner image={aboutBannerImg} imageAlt={'Banniere de la page A Propos'}/>  
        {dropdownText.map((dropdown, index) => (
          <Dropdown data={dropdown} key={dropdown.id ? dropdown.id : index}> </Dropdown>
        ))}

    </main>
  )
};

export default About
