import { MainLayout } from "../components/Layouts/MainLayout"
import { HomeSearch } from '../components/UI/organisms/Home/HomeSearch'
import { HomeFooter } from "../components/UI/organisms/Home/HomeFooter"
import styles from './Home.module.scss'

export const HomePage = () => {
  return (
    <MainLayout>
      <div className={styles.homeWrapper}>
        <HomeSearch />
        <HomeFooter />
      </div>
    </MainLayout>
  )
}