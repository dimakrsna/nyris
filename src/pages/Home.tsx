import { MainLayout } from "../components/Layouts/MainLayout"
import { HomeSearch } from '../components/UI/organisms/Home/HomeSearch'
import { HomeFooter } from "../components/UI/organisms/Home/HomeFooter"

export const HomePage = () => {
  return (
    <MainLayout>
      <HomeSearch />
      <HomeFooter />
    </MainLayout>
  )
}