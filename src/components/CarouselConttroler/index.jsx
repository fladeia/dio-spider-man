import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const CarouselConttroler = ({ pages, home }) => {
  const { actorsData, setMovieId, cardId } = useActor()
  const { movies } = actorsData[cardId]
  const lis = [...document.querySelectorAll('.CarouselItems')]
  let mapOptions

  mapOptions = home ? mapOptions = actorsData : movies

  function handleClick(e) {
    setMovieId(e.target.id)

    lis.map((item, index) => {
      item.classList.remove('active')
    })

    e.target.classList.add('active')
  }

  return (
    <C.Container pages={pages}>
      <ul>
        {mapOptions.map((item, index) => {
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
