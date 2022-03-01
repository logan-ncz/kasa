import Logo from '../../assets/dark-logo.png'
import './styles.scss'

export default function Footer() {
    return (
        <footer className='footer'>
          <img src={Logo} alt='' />
          <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}