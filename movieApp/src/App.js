import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { MovieProvider } from './Components/context/MovieContext'
import Home from './Pages/Home'
const App = () => {
  return (
    <MovieProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </MovieProvider>
  )
}

export default App