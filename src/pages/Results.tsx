import { MainLayout } from "../components/Layouts/MainLayout"
import { CardsList } from "../components/UI/organisms/Results/CardsList"
import { ResultsSearch } from "../components/UI/organisms/Results/ResultsSearch"
import { ResultsFooter } from '../components/UI/organisms/Results/ResultsFooter'

export const ResultsPage = () => {
  return (
    <MainLayout>
      <ResultsSearch />
      <CardsList />
      <ResultsFooter />
    </MainLayout>
  )
}