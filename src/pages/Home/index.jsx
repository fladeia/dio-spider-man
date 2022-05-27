import * as C from './styles'
import { Layout } from '../../components/Layout'
import { Nav } from '../../components/Nav'
import { Card } from '../../components/Card'
import { CarouselConttroler } from '../../components/CarouselConttroler'
import { useEffect, useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'

export const Home = () => {
  const { actorsData, cardId, bgOpacity } = useActor()
  const [bg, setBg] = useState()

  useEffect(() => {
    setBg(actorsData[cardId].background)
  }, [cardId])

  return (
    <Layout>
      <C.Container
        bg={bg}
        bgOpacity={bgOpacity}
      >
        <Nav />
        <Card />
        <CarouselConttroler />
      </C.Container>
    </Layout>
  )
}