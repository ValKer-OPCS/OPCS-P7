import aboutBannerImg from '../../Assets/aboutBanner.png'
import Banner from '../../Component/Banner/Banner.jsx'
import Dropdown from '../../Component/Dropdown/Dropdown.jsx'
/* import styles from './styles.module.scss' */
/* import { useState, useEffect } from 'react' */


const dropdownData = [

{
		"id": "1",
		"title": "Fiabilité",
		"text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
},
{
		"id": "2",
		"title": "Respect",
		"text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
},
{
		"id": "3",
		"title": "Service",
		"text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
},
{
		"id": "4",
		"title": "Sécurité",
		"text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}

]


const About = () => {


/* const [dropdownText, setDropdownText] = useState([]);

  useEffect(() => {
    fetch('/about.json')
      .then((response) => response.json())
      .then((data) => setDropdownText(data))
      .catch((error) => console.error(error));
  }, []); */

  return (
    <main>
        <Banner image={aboutBannerImg} imageAlt={'Banniere de la page A Propos'} overlayOpacity={0.3} />  
        {dropdownData.map((dropdown, index) => (
          <Dropdown title={dropdown.title} text={dropdown.text} key={dropdown.id ?? index} styleVariant="about" />
        ))}

    </main>
  )
};

export default About
