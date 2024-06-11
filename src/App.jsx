import { useState } from 'react'
import './App.scss'
import './Components/Home/Home.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Home/Header'
function App() {
  const [searchVal, setSearchVal] = useState('') 
  return (
    <Router>
        <Header searchVal={searchVal} setSearchVal={setSearchVal}/>
      <Routes>
        <Route path='/' element={<Home searchVal={searchVal}/>}/>
      </Routes>
    </Router>
  )
}

export default App
