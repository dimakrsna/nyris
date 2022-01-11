import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import icon from '../../../../assets/svg/icon-search.svg'
import styles from './HomeSearch.module.scss'
import { InputSearch } from '../../atoms/InputSearch'
import { history } from '../../../../App'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../../../store/actions'
import { searchSelector } from '../../../../store/selectors'

export const HomeSearch = () => {
  const searchStore = useSelector(searchSelector)
  const [value, onValueChange] = useState<string>(searchStore?.searchValue)
  const dispatch = useDispatch()

  const onSearch = () => {
    if (value) {
      dispatch(Actions.search.getSearchRequest(value))
      history.push('/results')
    }
  }

  const onClear = () => {
    dispatch(Actions.search.getSearchSuccess([]))
    onValueChange('')
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
          onClear={onClear}
          onSubmit={onSearch}
        />
      </div>
      <div className={styles["note"]}>Search by any name, category, SKU or keyword.</div>
    </div>
  )
}