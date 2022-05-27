import { useEffect, useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const Card = () => {
  const { actorsData, setCardId, setBgOpacity, cardOpacity, setCardOpacity } = useActor()
  const test = [...document.querySelectorAll('.card')]

  function handleCardEnter(e) {
    e.target.classList.add('hoverd')
    setCardId(e.target.id)
    setBgOpacity(1)
    setCardOpacity(0)
    e.target.nextSibling.classList.add('textHover')

    const disable = test.filter((item) => {
      return !item.classList.contains('hoverd')
    })

    disable.map((item, index) => {
      item.classList.add('disable')
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

    enable.map((item, index) => {
      item.classList.remove('disable')
    })
  }

  return (
    <C.Container>
      {actorsData.map((item, index) => {
        return (
          <C.CardContainer key={index} >
            <a href={item.url}>
              <C.CardBackground
                src={item.background}
                alt='Card background'
                cardOpacity={cardOpacity}
              />
              <C.CardImage
                src={item.image}
                alt='Tom spider man'
                className='card'
                id={index}
                onMouseOver={handleCardEnter}
                onMouseOut={handleCardLeave} />
              <C.CardText>{item.actor}</C.CardText>
            </a>
          </C.CardContainer>
        )
      })}
    </C.Container>
  )
}
