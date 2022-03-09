import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.scss'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const currentRoute = useLocation()

  return (
    <header className='header'>
      <Link to="/">
        <img src={Logo} alt='' />
      </Link>
      <div>
        {/* <Link className={currentRoute.pathname = '/'&&'underline'} to="/" >Accueil</Link> */}
        <Link className={`${currentRoute.pathname === '/' ? "underline" : ""}`} to="/" >Accueil</Link>
        <Link className={`${currentRoute.pathname === '/a_propos' ? "underline" : ""}`} to="/a_propos">A Propos</Link>
      </div>
    </header>
  )
}