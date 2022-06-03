import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Card } from '../../components/Card'
import { CarouselConttroler } from '../../components/CarouselConttroler'
import { useActor } from '../../providers/ActorsProvider'
import spider from '../../assets/images/spiderIcon.svg'
import * as C from './styles'

export const Home = () => {
  const { actorsData, cardId, bgOpacity, setCardId } = useActor()
  const [bg, setBg] = useState()

  function handleClick(e) {
    setCardId(e.target.id)
  }

  useEffect(() => {
    setBg(actorsData[cardId].cardBg)
  }, [actorsData, cardId])

  return (
    <C.Container bg={bg} bgOpacity={bgOpacity} >
      <C.Nav>
        <ul>
          {actorsData.map((item, index) => {
            return (
              <li key={index}>
                <img src={spider} alt='Multiverse spider'></img>
                <Link
                  id={index}
                  to={item.path}
                  onClick={handleClick}
                >
                  {item.actor}
                </Link>
              </li>
            )
          })}
        </ul>
      </C.Nav>
      <Card />
      <CarouselConttroler home={true} />
    </C.Container>
  )
}
