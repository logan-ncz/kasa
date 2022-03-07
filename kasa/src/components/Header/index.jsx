import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.scss'

export default function Header() {
  return (
    <header className='header'>
      <Link to="/">
        <img src={Logo} alt='' />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/a_propos">A Propos</Link>
      </div>
    </header>
  )
}