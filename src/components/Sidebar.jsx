import { Link, useLocation } from "react-router-dom";
import Socials from "./Socials";
import './sidebar.css'
const Sidebar = () => {
  const location = useLocation()
  return (
    <div className="sidenav">
        <h1 className="title">
            Kean Ulrich Gozon
        </h1>
        <ul>
            <li><Link className={'/' === location.pathname || location.pathname === '/' ? 'active' : ''} to={'/'}>Home</Link></li>
            <li><Link className={location.pathname === '/about/' || location.pathname === '/about' ? 'active' : ''} to={'/about'}>About Me</Link></li>
            <li><Link className={location.pathname === '/portfolio/' || location.pathname === '/portfolio' ? 'active' : ''} to={'/portfolio'}>Portfolio</Link></li>
            <li><Link className={location.pathname === '/resources/' || location.pathname === '/resources' ? 'active' : ''} to={'/resources'}>Resources</Link></li>
            <li><Link className={location.pathname === '/contact/' || location.pathname === '/contact' ? 'active' : ''} to={'/contact'}>Contact</Link></li>
        </ul>
        <p><br/></p>
        <Socials/>
    </div>
  )
}

export default Sidebar
