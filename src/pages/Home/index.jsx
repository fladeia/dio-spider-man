import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Card } from '../../components/Card'
import { CarouselConttroler } from '../../components/CarouselConttroler'
import { useActor } from '../../providers/ActorsProvider'
import spider from '../../assets/images/spiderIcon.svg'
import * as C from './styles'

export const Home = () => {
  const { actorsData, cardId, setCardId } = useActor()
  const [carouselSelected, setCarouselSelected] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(0.2)
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
      <Card setBgOpacity={setBgOpacity} carouselSelected={carouselSelected} />
      <CarouselConttroler home={true} setCarouselSelected={setCarouselSelected} />
    </C.Container>
  )
}
