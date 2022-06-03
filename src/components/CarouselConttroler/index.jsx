import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const CarouselConttroler = ({ pages, home, setMovieId }) => {
  const { actorsData, cardId, setCarouselSelected } = useActor()
  const { movies } = actorsData[cardId]
  const lis = [...document.querySelectorAll('.CarouselItems')]
  let isHome
  let test = false

  if (isHome = home) {
    isHome = actorsData
  } else {
    isHome = movies
    test = true
  }

  function handleClick(e) {
    test && setMovieId(e.target.id);

    lis.map((item, index) => {
      item.classList.remove('active')
    })

    e.target.classList.add('active')
    e.target.id == Number(0) ? setCarouselSelected(0) : e.target.id == 1 ? setCarouselSelected(240) : setCarouselSelected(120)
  }

  return (
    <C.Container pages={pages}>
      <ul>
        {isHome.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
              className='CarouselItems'
              onClick={handleClick} //insert on each item the handleclick function. (addEventListener, alternative)
            >
              {index + 1}
            </li>
          )
        })}
      </ul>
      <C.Line pages={pages} />
    </C.Container>
  )
}
