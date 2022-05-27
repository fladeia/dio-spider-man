import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '../global/GlobalStyles';
import { Spiderman1 } from '../pages/Spiderman1'
import { Spiderman2 } from '../pages/Spiderman2'
import { Spiderman3 } from '../pages/Spiderman3'
import { Home } from '../pages/Home'
import { ActorsProvider } from '../providers/ActorsProvider'

export const App = () => {
  return (
    <BrowserRouter>
      <ActorsProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='spiderman1' element={<Spiderman1 />} />
          <Route path='spiderman2' element={<Spiderman2 />} />
          <Route path='spiderman3' element={<Spiderman3 />} />
        </Routes>
      </ActorsProvider>
    </BrowserRouter>
  )
}
