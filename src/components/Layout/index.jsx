import { useEffect, useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const Layout = ({ children }) => {
  const { actorsData, cardId } = useActor()
  const [bg, setBg] = useState(actorsData[2].background)

  useEffect(() => {
    setBg(actorsData[cardId].background)
  }, [cardId])

  return (
    <C.Container bg={bg}>{children}</C.Container>
  )
}
