import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import icon from '../../../../assets/svg/icon-search.svg'
import styles from './HomeSearch.module.scss'
import { InputSearch } from '../../atoms/InputSearch'
import { history } from '../../../../App'

export const HomeSearch = () => {
  const [value, onValueChange] = useState<string>('')

  const onSearch = () => {
    history.push('/results')
  }
  
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.iconWrapper}>
        <ReactSVG className={styles.icon} src={icon} />
      </div>
      <div className={styles.searchFormWrapper}>
        <InputSearch
          value={value}
          onInputChange={(event) => { onValueChange(event.target.value) }}
          onClear={() => onValueChange('')}
          onSubmit={onSearch}
        />
      </div>
      <div className={styles["note"]}>Search by any name, category, SKU or keyword.</div>
    </div>
  )
}