import * as C from './styles'

export const CarouselConttroler = ({ pages }) => {
  return (
    <C.Container pages={pages}>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
      <C.Line pages={pages} />
    </C.Container>
  )
}
