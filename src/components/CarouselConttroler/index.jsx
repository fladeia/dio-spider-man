import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'

export const CarouselConttroler = ({ pages }) => {
  const { actorsData, setMovieId } = useActor()
  const { movies } = actorsData[0]

  function handleClick(e) {
    setMovieId(e.target.id)
  }

  return (
    <C.Container pages={pages}>
      <ul>
        {movies.map((item, index) => {
          return <li key={index} id={index} onClick={handleClick}>{index + 1}</li>
        })}
      </ul>
      <C.Line pages={pages} />
    </C.Container>
  )
}
