import Banner from '../../assets/banner.png'
import './styles.scss'
import CardLogement from '../../components/CardLogement'
import logements from '../../data/logements.json'



export default function Home() {
    return (
        <div className='home'>
            <div className='banner'>
                <figure>
                    <img className='bannerImg' src={Banner} alt='' />
                </figure>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className='cardLogement'>
                {logements.map(element => <CardLogement logement={element} key={element.id}/> )}
            </div>
        </div>
    )
}