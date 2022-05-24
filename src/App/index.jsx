import { Layout } from '../components/Layout'
import { Nav } from '../components/Nav'
import { Card } from '../components/Card'
import { CarouselConttroler } from '../components/CarouselConttroler'
import { ActorsProvider } from '../providers/ActorsProvider'

export const App = () => {

  return (
    <ActorsProvider>
      <Layout>
        <Nav />
        <Card />
        <CarouselConttroler />
      </Layout>
    </ActorsProvider>
  )
}
