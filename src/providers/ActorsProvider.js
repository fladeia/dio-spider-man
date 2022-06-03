import { createContext, useContext, useState } from "react"
import { data } from "../data/data"

//Context
const ActorContext = createContext(undefined)

//Provider
export const ActorsProvider = ({children}) => {
  const [actorsData, setActorsData] = useState(data)
  const [cardId, setCardId] = useState(0)

  const [carouselSelected, setCarouselSelected] = useState(0)

  const value = {
    actorsData, 
    setActorsData, 
    cardId, 
    setCardId, 
    carouselSelected, 
    setCarouselSelected
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

//if reload pages values reset