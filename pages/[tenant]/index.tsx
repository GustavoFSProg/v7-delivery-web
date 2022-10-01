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
          <SearchInput onSearch={handleSerach} mainColor='#fb9400'/>
        </div>
        <div className={styles.middleContainer}>
         
         
          <Banner />
          

        
        </div>
        <div className={styles.grid}>
          <ProductItem /> 
          <ProductItem /> 
          <ProductItem /> 
          <ProductItem /> 
          
        </div>
      </header>

    </div>
  )
}

export default Home
