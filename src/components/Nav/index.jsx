import { Link } from "react-router-dom";
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'
import spider from '../../assets/images/spiderIcon.svg'

export const Nav = () => {
  const { actorsData, setCardId } = useActor()

  function handleClick(e) {
    setCardId(e.target.id)
  }
  return (
    <C.Container>
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
    </C.Container>
  )
}
