import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import PaddingWrapper from './components/PaddingWrapper'
import { LoaderProvider } from './components/LoaderContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <LoaderProvider>

          <Navbar />
          <PaddingWrapper>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MoviePage />} />
            </Routes>
          </PaddingWrapper>
        </LoaderProvider>
      </BrowserRouter>
    </>
  )
}

export default App
