
// import './App.css'
import {LandingPage,Home,Detail} from './views/index.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

     
    </>
  )
}

export default App
