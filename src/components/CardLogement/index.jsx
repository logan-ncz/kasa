import './styles.scss'
import { Link } from 'react-router-dom'


export default function CardLogement(props) {

    let datas = props.logement

    return (
        <Link to={`/ficheLogement/${datas.id}`}>
            <div className='card'>
                <img src={datas.cover} alt="" />
                <p>{datas.title}</p>
                <div className="shadow">
                </div>
            </div>
        </Link>
    )
    
}