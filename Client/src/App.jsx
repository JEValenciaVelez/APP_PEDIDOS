import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
