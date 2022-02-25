import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/logo.png'
import './styles.scss'

const HomeLogo = styled.img`
  height: 50px;
`

export default function Header() {
  return (
    <header className='header'>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a_propos">A Propos</StyledLink>
      </div>
    </header>
  )
}