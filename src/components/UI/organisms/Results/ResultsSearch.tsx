import { InputSearch } from '../../atoms/InputSearch'
import styles from './ResultsSearch.module.scss'

export const ResultsSearch = () => {

  return (
    <div className={styles.searchWrapper}>
      <InputSearch/>
    </div>
  )
}