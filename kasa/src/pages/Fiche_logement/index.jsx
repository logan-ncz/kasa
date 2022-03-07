import './styles.scss'
import logements from '../../data/logements.json'
import Star from '../../assets/rate.svg'
import Chevron from '../../assets/chevron.svg'
import Chevron_down from '../../assets/chevron-down.svg'
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


function FicheLogement() {

    const { id } = useParams()

    const logementFinal = !id ? logements : logements.filter(logement => logement.id === id);

    const images = logementFinal[0].pictures

    const [ imagesIndex , ChangeIndex ] = useState(0);

    const [ openCloseDescription , setOpenCloseDescription ] = useState(true);

    const [ openCloseEquipements , setOpenCloseEquipements ] = useState(true);

    const changeImage = function(indexFunc){
        console.log(images);
        if(indexFunc === -1){
            indexFunc = images.length - 1
        } else if (indexFunc === images.length){
            indexFunc = 0
        }
        ChangeIndex(indexFunc)
    }

    const menuOpenCloseDescription = function(value){
        if(value === true){
            value = false
        } else if(value === false){
            value = true
        }
        setOpenCloseDescription(value)
    }

    const menuOpenCloseEquipements = function(value){
        if(value === true){
            value = false
        } else if(value === false){
            value = true
        }
        setOpenCloseEquipements(value)
    }

    

    return (
        <div className='ficheLogement'>
            <div className='ficheLogement_gallery'>
                <img className='ficheLogement_gallery_chevronleft' onClick={() => changeImage(imagesIndex - 1)} src={ChevronLeft} alt='' />
                <img className='ficheLogement_gallery_img' src={images[imagesIndex]} alt="" />
                <img className='ficheLogement_gallery_chevronright' onClick={() => changeImage(imagesIndex + 1)} src={ChevronRight} alt='' />
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
                    <div className='ficheLogement_bottom_description_title'>
                        <p>Description</p>
                        {openCloseDescription?<img className='ficheLogement_bottom_description_title_chevron' onClick={() => menuOpenCloseDescription(openCloseDescription)} src={Chevron} alt="" />:<img className='ficheLogement_bottom_description_title_chevron' onClick={() => menuOpenCloseDescription(openCloseDescription)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseDescription?<div className="ficheLogement_bottom_description_text">
                        <p>{logementFinal[0].description}</p>
                    </div>:null}
                    
                </div>
                <div className="ficheLogement_bottom_equipements">
                    <div className='ficheLogement_bottom_equipements_title'>
                        <p>Equipements</p>
                        {openCloseEquipements?<img className='ficheLogement_bottom_equipements_title_chevron' onClick={() => menuOpenCloseEquipements(openCloseEquipements)} src={Chevron} alt="" />:<img className='ficheLogement_bottom_equipements_title_chevron' onClick={() => menuOpenCloseEquipements(openCloseEquipements)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseEquipements?<div className="ficheLogement_bottom_equipements_text">
                        {logementFinal[0].equipments.map(equipment => <p>{equipment}</p>)}
                    </div>:null}
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default FicheLogement