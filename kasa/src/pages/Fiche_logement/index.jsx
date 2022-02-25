import './styles.scss'
import logements from '../../data/logements.json'
import Star from '../../assets/rate.svg'
import Chevron from '../../assets/chevron.svg'
import { useParams } from 'react-router-dom'


function FicheLogement() {
    const { id } = useParams()

    const logementFinal = !id ? logements : logements.filter(logement => logement.id === id);

    return (
        <div className='ficheLogement'>
            <div className='ficheLogement_img'>
                <img src={logementFinal[0].cover} alt="" />
            </div>
            <div className="ficheLogement_mid">
                <div className='ficheLogement_info'>
                    <p className='ficheLogement_info_name'>{logementFinal[0].title}</p>
                    <p className='ficheLogement_info_location'>{logementFinal[0].location}</p>
                    <div className="ficheLogement_info_tags">
                        {logementFinal[0].tags.map(tag =>
                        <span key={tag} className="ficheLogement_info_tag" data-filter={tag} alt="tag">{tag}</span>)}
                    </div>
                </div>
                <div className='ficheLogement_host'>
                    <div>
                        <p className='ficheLogement_host_name'>{logementFinal[0].host.name}</p>
                        <img className='ficheLogement_host_picture' src={logementFinal[0].host.picture} alt='' />
                    </div>
                    <img className='ficheLogement_host_rating' src={Star} alt='' />
                </div>
            </div>
            <div className="ficheLogement_bottom">
                <div className="ficheLogement_bottom_description">
                    <div className='ficheLogement_bottom_description_top'>
                        <p>Description</p>
                        <img src={Chevron} alt="" />
                    </div>
                    <div className="ficheLogement_bottom_description_text">
                        <p>{logementFinal[0].description}</p>
                    </div>
                    
                </div>
                <div className="ficheLogement_bottom_equipements">
                    <div className='ficheLogement_bottom_equipements_top'>
                        <p>Equipements</p>
                        <img src={Chevron} alt="" />
                    </div>
                    <div className="ficheLogement_bottom_equipements_text">
                        {/* <p>{logementFinal[0].equipments}</p> */}
                        {logementFinal[0].equipments.map(equipment => <p>{equipment}</p>)}
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default FicheLogement