import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchInput from '../../components/search'
import styles from '../../styles/Home.module.css'
import burguerImage from '../../assets/Card-burger.png'
import TexasBurguer from '../../assets/TexasBurger.png'
import GoldenBurguer from '../../assets/GoldenBurger.png'
import MonsterBurguer from '../../assets/MonsterBurger.png'
import OldBurguer from '../../assets/OldBurger.png'
import Banner from '../../components/banner'

const Home: NextPage = () => {
  
  function handleSerach(searchValue: String) {
      console.log(`Voce esta buscando por: ${searchValue}`)
      alert(`Voce esta buscando por: ${searchValue}`)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo (a) 👋</div>

            <div className={styles.headerSubTitle}>O que Deseja pra hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButtom}>
              <div className={styles.menuButtomLines}></div>
              <div className={styles.menuButtomLines}></div>
              <div className={styles.menuButtomLines}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSerach} mainColor='#fb9400'/>
        </div>
        <div className={styles.middleContainer}>
         
         
      <Banner />

        
        </div>
        <div className={styles.containerFotos}>
          <div className={styles.containerLeft}>
            <Image className={styles.TexasBurguer} src={TexasBurguer} alt="burguer image" />
            <span className={styles.paragraphTradicional}>Tradicional</span>

            <span className={styles.texasBurguer}>Texas Burguer</span>

            <span className={styles.burguerPrice}>R$ 25,00</span>
          </div>

          <div className={styles.containerRight}>
            <Image className={styles.GoldenBurguer} src={GoldenBurguer} alt="burguer image" />

            <span className={styles.paragraphTradicionalDois}>Tradicional</span>

            <span className={styles.goldenBurguerTitle}>Golden Burguer</span>

            <span className={styles.burguerPrice}>R$ 28,00</span>
          </div>
        </div>

        <div className={styles.containerFotos} style={{marginTop: '20px'}}>
          <div className={styles.containerLeft}>
            <Image className={styles.TexasBurguer} src={MonsterBurguer} alt="burguer image" />
            <span className={styles.paragraphTradicional}>Tradicional</span>

            <span className={styles.texasBurguer}>Texas Burguer</span>

            <span className={styles.burguerPrice}>R$ 25,00</span>
          </div>

          <div className={styles.containerRight}>
            <Image className={styles.GoldenBurguer} src={OldBurguer} alt="burguer image" />

            <span className={styles.paragraphTradicionalDois}>Tradicional</span>

            <span className={styles.goldenBurguerTitle}>Golden Burguer</span>

            <span className={styles.burguerPrice}>R$ 27,00</span>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Home
