import { useState } from 'react'
import { InputSearch } from '../../atoms/InputSearch'
import styles from './ResultsSearch.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../../../store/actions'
import { searchSelector } from '../../../../store/selectors'

export const ResultsSearch = () => {
  const searchStore = useSelector(searchSelector)
  const [value, onValueChange] = useState<string>(searchStore?.searchValue)
  const dispatch = useDispatch()

  const onSearch = () => {
    if (value) {
      dispatch(Actions.search.getSearchRequest(value))
    }
  }

  const onClear = () => {
    dispatch(Actions.search.getSearchSuccess([]))
    onValueChange('')
  }

  return (
    <div className={styles.searchWrapper}>
      <InputSearch
        value={value}
        onInputChange={(event) => { onValueChange(event.target.value) }}
        onClear={onClear}
        onSubmit={onSearch}
      />
    </div>
  )
}