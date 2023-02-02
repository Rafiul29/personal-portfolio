import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import Home from './components/Home'
import Navbar from "./components/Navbar"

const App = () => {
  return <div className='app'>
    <div className="noise"></div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </div>
  
}

export default App