import { useEffect, useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'


export const Layout = ({ children }) => {
  const { actorsData, cardId, bgOpacity } = useActor()
  const [bg, setBg] = useState()

  useEffect(() => {
    setBg(actorsData[cardId].background)
  }, [cardId])

  return (
    <C.Container bg={bg} bgOpacity={bgOpacity}>{children}</C.Container>
  )
}
