import { useEffect, useState } from 'react'
import * as C from './styles'
import { useActor } from '../../providers/ActorsProvider'
import { Layout } from '../../components/Layout'
import { Nav } from '../../components/Nav'
import { Card } from '../../components/Card'
import { CarouselConttroler } from '../../components/CarouselConttroler'

export const Home = () => {
  const { actorsData, cardId, bgOpacity } = useActor()
  const [bg, setBg] = useState()

  useEffect(() => {
    setBg(actorsData[cardId].cardBg)
  }, [actorsData, cardId])

  return (
    <Layout>
      <C.Container
        bg={bg}
        bgOpacity={bgOpacity}
      >
        <Nav />
        <Card />
        <CarouselConttroler home={true} />
      </C.Container>
    </Layout>
  )
}
