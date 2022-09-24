import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchInput from '../../components/search'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
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
              <div className={styles.menuButtomLines}>

            </div>
              <div className={styles.menuButtomLines}>

              </div>
              <div className={styles.menuButtomLines}>

            </div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>

          <SearchInput />
        </div>
      </header>
    </div>
  )
}

export default Home
