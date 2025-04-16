import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import PaddingWrapper from './components/PaddingWrapper'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PaddingWrapper>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MoviePage />} />
          </Routes>
        </PaddingWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
