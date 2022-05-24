import { useState } from 'react'
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const Card = () => {
  const { actorsData, setCardId } = useActor()

  function handleCardEnter(e) {
    e.target.classList.add('hoverd')
    setCardId(e.target.id)
  }

  function handleCardLeave(e) {
    e.target.classList.remove('hoverd')
  }

  return (
    <C.Container>
      {actorsData.map((item, index) => {
        return (<C.CardContainer key={index} id={index} onMouseOver={handleCardEnter} onMouseOut={handleCardLeave}>
          <a href={item.url}>
            <C.CardBackground src={item.background} alt='Card background' />
            <C.CardImage src={item.image} alt='Tom spider man' />
            <C.CardText>{item.actor}</C.CardText>
          </a>
        </C.CardContainer>
        )
      })}
    </C.Container>
  )
}
