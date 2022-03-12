import './styles.scss'
import logements from '../../data/logements.json'
import Rate1 from '../../assets/rate1.svg'
import Rate2 from '../../assets/rate2.svg'
import Rate3 from '../../assets/rate3.svg'
import Rate4 from '../../assets/rate4.svg'
import Rate5 from '../../assets/rate5.svg'
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Collapse from '../../components/Collapse';


function FicheLogement() {

    const { id } = useParams()

    const logementFinal = !id ? logements : logements.filter(logement => logement.id === id);

    const images = logementFinal[0].pictures

    const [ imagesIndex , ChangeIndex ] = useState(0);

    const [ openCloseDescription , setOpenCloseDescription ] = useState(false);

    const [ openCloseEquipements , setOpenCloseEquipements ] = useState(false);

    function menuOpenClose(element, title){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        switch (title) {
            case 'description':
                setOpenCloseDescription(element)
                break;
            case 'equipements':
                setOpenCloseEquipements(element)
                break;
            default:
                return null;
        }
    }

    const changeImage = function(indexFunc){
        if(indexFunc === -1){
            indexFunc = images.length - 1
        } else if (indexFunc === images.length){
            indexFunc = 0
        }
        ChangeIndex(indexFunc)
    }

    return (
        <div className='ficheLogement'>
            <div className='ficheLogement_gallery'>
                {images.length > 1?<img className='ficheLogement_gallery_chevronleft' onClick={() => changeImage(imagesIndex - 1)} src={ChevronLeft} alt='' />:null}
                <img className='ficheLogement_gallery_img' src={images[imagesIndex]} alt="" />
                {images.length > 1?<img className='ficheLogement_gallery_chevronright' onClick={() => changeImage(imagesIndex + 1)} src={ChevronRight} alt='' />:null}
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
                    <div>
                        {logementFinal[0].rating === "1"?<img className='ficheLogement_host_rating' src={Rate1} alt='' />:null}
                        {logementFinal[0].rating === "2"?<img className='ficheLogement_host_rating' src={Rate2} alt='' />:null}
                        {logementFinal[0].rating === "3"?<img className='ficheLogement_host_rating' src={Rate3} alt='' />:null}
                        {logementFinal[0].rating === "4"?<img className='ficheLogement_host_rating' src={Rate4} alt='' />:null}
                        {logementFinal[0].rating === "5"?<img className='ficheLogement_host_rating' src={Rate5} alt='' />:null}
                    </div>
                    
                </div>
            </div>
            <div className="ficheLogement_bottom">
                <Collapse class={'ficheLogement_bottom_description'} title='Description' state={openCloseDescription} function={() => menuOpenClose(openCloseDescription, 'description')}>
                    <p>{logementFinal[0].description}</p>
                </Collapse>

                <Collapse class={'ficheLogement_bottom_equipements'} title='Equipements' state={openCloseEquipements} function={() => menuOpenClose(openCloseEquipements, 'equipements')}>
                    {logementFinal[0].equipments.map(equipment => <p key={equipment}>{equipment}</p>)}
                </Collapse>
            </div>
            
            
        </div>
    )
}

export default FicheLogement