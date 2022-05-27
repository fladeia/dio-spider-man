import * as C from './styles'
import { CarouselConttroler } from '../../components/CarouselConttroler'
import spider from '../../assets/images/icons/spider.svg'
import { Link } from 'react-router-dom'

export const Spiderman1 = () => {
  return (
    <C.Container>
      <C.LeftContent>
        <Link to='/'>
          <img src={spider} alt='Ícone aranha'></img>
        </Link>
        <CarouselConttroler pages></CarouselConttroler>
      </C.LeftContent>
      <C.RightContent>
        right
      </C.RightContent>
    </C.Container>
  )
}
