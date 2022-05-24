import { useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const Layout = ({ children }) => {
  const { actorsData, setActorsData } = useActor()
  const [bg, setBg] = useState(actorsData[2].background)

  return (
    <C.Container bg={bg}>{children}</C.Container>
  )
}
