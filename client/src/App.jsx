
// import './App.css'
import { LandingPage, Home, Detail, NotFound, Create } from './views/index.js'
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create" element={<Create />} />

      </Routes>


    </div>
  )
}

export default App
