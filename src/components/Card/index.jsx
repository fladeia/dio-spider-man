import { useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import { Link } from 'react-router-dom'
import * as C from './styles'

export const Card = ({ setBgOpacity, carouselSelected }) => {
  const { actorsData, setCardId } = useActor()
  const test = [...document.querySelectorAll('.card')]
  const [cardOpacity, setCardOpacity] = useState(1)


  function handleCardEnter(e) {
    e.target.classList.add('hoverd')
    setCardId(e.target.id)
    setBgOpacity(1)
    setCardOpacity(0)
    e.target.nextSibling.classList.add('textHover')

    const disable = test.filter((item) => {
      return !item.classList.contains('hoverd')
    })


    disable.map((item) => {
      return item.classList.add('disable')
    })
  }

  function handleCardLeave(e) {
    e.target.classList.remove('hoverd')
    e.target.nextSibling.classList.remove('textHover')
    setBgOpacity(0.2)
    setCardOpacity(1)

    const enable = test.filter((item) => {
      return item.classList.contains('disable')
    })

    enable.map((item) => {
      return item.classList.remove('disable')
    })
  }

  return (
    <C.Container>
      <C.CardCarousel carouselSelected={carouselSelected}>
        {actorsData.map((item, index) => {
          return (
            <C.CardContainer
              key={index}
              className='cards'
            >
              <Link to={item.path}>
                <C.CardBackground
                  src={item.cardBg}
                  alt='Card background'
                  cardOpacity={cardOpacity}
                />
                <C.CardImage
                  src={item.cardPic}
                  alt='Tom spider man'
                  id={index}
                  className='card'
                  onPointerEnter={handleCardEnter}
                  onPointerLeave={handleCardLeave} />
                <C.CardText>{item.actor}</C.CardText>
              </Link>
            </C.CardContainer>
          )
        })}
      </C.CardCarousel>
    </C.Container>
  )
}
