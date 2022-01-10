import React from "react"
import { TopBar } from "../UI/molecules/TopBar"
import styles from './MainLayout.module.scss'

export const MainLayout: React.FC = (props) => {
  return (
    <main className={styles.mainLayout}>
      <TopBar />
      {props.children}
    </main>
  )
}