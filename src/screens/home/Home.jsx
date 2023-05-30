import './home.css'
import ParticlesBackground from "../../components/ParticlesBackground"
import Sidebar from "../../components/Sidebar"
import ButtonSide from "../../components/ButtonSide"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
    <ParticlesBackground/>
    <Sidebar/>
    <div className="main-page">
        <div className="hero container">
            <h1>Hello, I'm <br/> <span>Kean Ulrich Gozon</span></h1>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p>Web Developer <span>//</span> 22 years old <span>//</span> 12+ Projects</p>
            <p className="center-align"><Link className='button' to='/about'>ABOUT ME</Link> <Link className='button yellow' to='/portfolio'>PORTFOLIO</Link></p>
        </div>
    </div>
    <ButtonSide/>
    </>
  )
}

export default Home
