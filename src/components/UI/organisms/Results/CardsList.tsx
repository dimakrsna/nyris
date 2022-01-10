import { Card } from "../../molecules/Card"
import styles from './CardsList.module.scss'

export const CardsList = () => {

  return (
    <main className={styles.containerWrapper}>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}