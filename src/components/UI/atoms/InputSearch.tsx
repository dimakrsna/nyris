import { ChangeEvent } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './InputSearch.module.scss'
import iconCross from '../../../assets/svg/icon-cross.svg'

interface Props {
  value?: string
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  onSubmit?: (event) => void
}

export const InputSearch = ({ value, onInputChange, onClear, onSubmit }: Props) => {

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmit && onSubmit(event)
  }

  return (
    <form className={styles.searchForm} onSubmit={onFormSubmit}>
      <input
        id="search"
        type="text"
        className={styles.searchInput}
        placeholder="Search in Trumpf catalogue"
        value={value}
        onChange={onInputChange && onInputChange}
      />
      {value && <span className={styles.searchIcon} onClick={onClear && onClear}>
        <ReactSVG className="search-icon" src={iconCross} />
      </span>}
    </form>
  )
}