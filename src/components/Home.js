import Hero from "./Hero"
import Bio from "./Bio"
import Projects from "./Projects"
import Skils from "./Skils"
import About from "./About"
import Contact from "./Contact"
const Home = () => {
  return (
    <div className="home" id="home">
      <Hero/>
      <Bio/>
      <Projects/>
      <Skils/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home