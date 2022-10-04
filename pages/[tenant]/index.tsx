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
import ProductItem from '../../components/ProductItem'

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
          <SearchInput onSearch={handleSerach} mainColor="#fb9400" />
        </div>
        <div className={styles.middleContainer}>
          <Banner />
        </div>
        <div className={styles.grid}>
          <ProductItem id="1" image={GoldenBurguer} name="Xis Tudo" category="Tradicional" price="R$ 15,00" />
          <ProductItem id="2" image={GoldenBurguer} name="Lanche Tudo" category="Tradicional" price="R$ 35,00" />
          <ProductItem id="3" image={GoldenBurguer} name="Monster Xis" category="Tradicional" price="R$ 25,00" />
          <ProductItem id="4" image={GoldenBurguer} name="Bak Burguer" category="Tradicional" price="R$ 17,00" />
        </div>
      </header>
    </div>
  )
}

export default Home
