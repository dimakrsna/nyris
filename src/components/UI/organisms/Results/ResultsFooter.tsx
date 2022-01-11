import styles from './ResultsFooter.module.scss'
import { ReactSVG } from 'react-svg'
import iconTt from '../../../../assets/svg/icon-tt.svg'
import { useSelector } from 'react-redux'
import { searchSelector } from '../../../../store/selectors'

export const ResultsFooter = () => {
  const searchStore = useSelector(searchSelector)
  const { result } = searchStore

  return (
    <div className={styles.footerWrapper}>
      <span className={styles.amount}>{result?.length || 0} results</span>
      <div>Didn’t find what you were looking for? Share your search with our <span className={styles.link}>product experts</span>.</div>
      <span className={styles.tt}>
        <ReactSVG src={iconTt} />
      </span>
    </div>
  )
}
