import styles from './style.module.css'
import image from '../../assets/Vector.png'
import Image from 'next/image'
import { useState } from 'react'

type props = {
  mainColor: String
  onSearch: (searchValue: String) => void
}
function SearchInput({ mainColor, onSearch }: props) {
  const [focused, setFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      onSearch(searchValue)
      }
  }

  return (
    <div
      className={styles.container}
      style={{
        border: focused ? `1px solid ${mainColor}` : 'none',
      }}
    >
      <div className={styles.botao} onClick={() => onSearch(searchValue)}>
        <Image src={image} height="20" width="20" alt="lupa" />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto:"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
