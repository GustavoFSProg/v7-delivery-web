import styles from './styles.module.css'
import imagem from '../../assets/MonsterBurger.png'
import Image from 'next/image'
import burguerImage from '../../assets/Card-burger.png'
import TexasBurguer from '../../assets/TexasBurger.png'
import GoldenBurguer from '../../assets/GoldenBurger.png'
import MonsterBurguer from '../../assets/MonsterBurger.png'
import OldBurguer from '../../assets/OldBurger.png'
import Link from 'next/link'

type PropsTyps ={
  id: string
  name: string
  image: any  
  category: string
  price: string
}

function ProductItem(props: PropsTyps) {
  return (
    <Link href="/b7delivery/product/1" >
    <div className={styles.container}>
      <div className={styles.head}>
        <Image style={{ marginTop: '15px', marginLeft: '-7px' }} src={props.image} alt="burguer" />
      </div>

      <div className={styles.info}>
        <div className={styles.containerFotos}>
          <div className={styles.containerLeft}>
            {/* <Image src={imagem}  alt="burguer"/> */}

            {/* <Image className={styles.TexasBurguer} src={TexasBurguer} alt="burguer image" /> */}
              <span className={styles.paragraphTradicional}>{props.category}</span>

            <span className={styles.texasBurguer}>{props.name}</span>

            <span className={styles.burguerPrice}>{props.price}</span>
          </div>

          {/* <div className={styles.containerRight}>
            <Image className={styles.GoldenBurguer} src={GoldenBurguer} alt="burguer image" />

            <span className={styles.paragraphTradicionalDois}>Tradicional</span>

            <span className={styles.goldenBurguerTitle}>Golden Burguer</span>

            <span className={styles.burguerPrice}>R$ 28,00</span>
          </div> */}
        </div>
      </div>
      </div>
    </Link>
      
  )
}

export default ProductItem
