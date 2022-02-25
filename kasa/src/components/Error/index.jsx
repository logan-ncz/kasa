import './styles.scss'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="error">
            <p className="error404">404</p>
            <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='errorLink' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}