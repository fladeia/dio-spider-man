import * as C from './styles'

export const CarouselConttroler = ({ pages }) => {
  return (
    <C.Container pages={pages}>
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <C.Line pages={pages} />
    </C.Container>
  )
}
