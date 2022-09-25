import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchInput from '../../components/search'
import styles from '../../styles/Home.module.css'
import burguerImage from '../../assets/Card-burger.png'


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
              <div className={styles.menuButtomLines}></div>
              <div className={styles.menuButtomLines}></div>
              <div className={styles.menuButtomLines}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput />
        </div>
        <div className={styles.middleContainer}>
          <div
            style={{
              width: '65px',
              height: '26px',
              background: 'rgba(251, 148, 0, 1)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',

            }}
          >
            <p
              style={{
                // top: '297px',
                marginLeft: '8px',
                paddingBottom: '1px',
                paddingLeft: '15px',
                paddingRight: '15px',
                  display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
                fontFamily: 'Inter',
                fontWeight: 'bold',
                 width: '49px',
                height: '12px',
                fontSize: '11px',
              color: 'white',
              
              }}
            >
            
              
              Promoção
            </p>
            <div className={styles.titleContainer}>


            <p className={styles.titleP}>
                Dose Dupla.
            </p>
            </div>

              <div className={styles.valorContainer}>


            <p className={styles.valorPromo}>
                2 Old Burguer pro apenas: 
            </p>
            </div>

              <div className={styles.precoContainer}>


            <p className={styles.precoPromo}>
                R$ 35,50
            </p>
            </div>
           
          </div>
          
 
          <div className={styles.imageContainer}>
            {/* <div className={styles.imageContainerInside} > */}
         
         
            <Image className={styles.imagem} src={burguerImage} alt="burguer image" />    
          
        </div>
          </div>
      </header>
    </div>
  )
}

export default Home
