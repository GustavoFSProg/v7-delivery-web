/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'
import image from '../../assets/Vector.png'
import Image from 'next/image'

function SearchInput() {
  return (
    <div className={styles.container}>
      <div className={styles.botao}>
       <Image src={image} height="20" width="20" alt="lupa" />
      </div>
      <input type="text" className={styles.input} placeholder="Digite o nome do produto:" />
    </div>
  )
}

export default SearchInput
