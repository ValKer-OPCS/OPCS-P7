
import styles from './styles.module.scss'

import homeBannerImg from '../../Assets/homeBanner.png'

import Banner from '../../Component/Banner/Banner.jsx'

import CardContainer from '../../Layout/CardContainer/CardContainer.jsx'


const Home = () => {



  return (
    <main>
      <Banner image={homeBannerImg} imageAlt={'Banniere du site'} overlayOpacity={0.6} >
        <div className={styles.text_container}>
          <p>Chez vous,&nbsp;</p>
          <p>partout et ailleurs</p>
        </div>
      </Banner>

      <CardContainer />

    </main>
  )
}

export default Home