import { useEffect } from "react"
import { Card } from "../../molecules/Card"
import styles from './CardsList.module.scss'
import { useSelector } from "react-redux"
import { searchSelector } from "../../../../store/selectors"
import { Spinner } from "../../atoms/Spinner"
import { v4 as uuidv4 } from 'uuid'

export const CardsList = () => {
  const searchStore = useSelector(searchSelector)
  const { isSearchRequsted, result } = searchStore

  useEffect(() => { }, [
    isSearchRequsted,
    result
  ])

  return (
    <main className={styles.containerWrapper}>
      <div className={styles.container}>
        {isSearchRequsted && <div className={styles.loaderWrapper}>
          <Spinner />
        </div>}
        {Boolean(result?.length) && result.map(item => <Card {...item} key={uuidv4()} />)}
      </div>
    </main>
  )
}