import { Link } from "react-router-dom";
import { useActor } from '../../providers/ActorsProvider'
import * as C from './styles'
import spider from '../../assets/images/spiderIcon.svg'

export const Nav = () => {
  const { actorsData } = useActor()

  return (
    <C.Container>
      <ul>
        <li>
          <img src={spider} alt='Multiverse spider'></img>
          <a href='/'>Página inicial</a>
        </li>
        {actorsData.map((item, index) => {
          return (
            <li key={index}>
              <img src={spider} alt='Multiverse spider'></img>
              <Link to={item.path}>{item.actor}</Link>
            </li>
          )
        })}
      </ul>
    </C.Container>
  )
}
