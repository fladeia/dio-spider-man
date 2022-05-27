import { createContext, useContext, useState } from "react"
import cardBgTom from '../assets/images/pic-sm-bg-01.jpg'
import cardBgTobey from '../assets/images/pic-sm-bg-02.jpg'
import cardBgAndrew from '../assets/images/pic-sm-bg-03.jpg'
import cardSpiderTom from '../assets/images/spider-man-01.png'
import cardSpiderTobey from '../assets/images/spider-man-02.png'
import cardSpiderAndrew from '../assets/images/spider-man-03.png'
import bgMain from '../assets/images/spider-man-background.jpg'

const data = [
     {
      actor: 'Tom Holland',
      background: cardBgTom,
      image: cardSpiderTom,
      url: 'spiderman1'
    },
    {
      actor: 'Tobey Maguire',
      background: cardBgTobey,
      image: cardSpiderTobey,
      url: 'spiderman2'
    },
    {
      actor: 'Andrew Garfield',
      background: cardBgAndrew,
      image: cardSpiderAndrew,
      url: 'spiderman3'
    }
]

//Context
const ActorContext = createContext(undefined)

//Provider
export const ActorsProvider = ({children}) => {
  const [actorsData, setActorsData] = useState(data)
  const [cardId, setCardId] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(0.2)
  const [cardOpacity, setCardOpacity] = useState(1)

  const value = {
    actorsData, 
    setActorsData, 
    cardId, 
    setCardId, 
    bgOpacity, 
    setBgOpacity, 
    cardOpacity, 
    setCardOpacity
  }

  return (
    <ActorContext.Provider value={value}>
      {children}
    </ActorContext.Provider>
  )
}

//hook
export const useActor = () => {
  const context = useContext(ActorContext)

  if(context === undefined) {
    throw new Error('useActor precisa ser usado dentro do provider')
  }
  return context
}
