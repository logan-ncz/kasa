import './styles.scss'
import { Link } from 'react-router-dom'


export default function CardLogement(element) {

    let datas = element

    return (
        <Link to={`/ficheLogement/${element.id}`} key={element.id}>
            <div className='card'>
                <img src={datas.cover} alt="" />
                <p>{datas.title}</p>
                <div className="shadow">
                </div>
                
            </div>
        </Link>
    )
    
}