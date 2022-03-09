import Banner from '../../assets/banner_a_propos.png'
import Chevron from '../../assets/chevron.svg'
import Chevron_down from '../../assets/chevron-down.svg'
import './styles.scss'
import { useState } from 'react';

export default function About() {

    const [ openCloseFiabilite , setOpenCloseFiabilite ] = useState(false);

    const [ openCloseRespect , setOpenCloseRespect ] = useState(false);

    const [ openCloseService , setOpenCloseService ] = useState(false);

    const [ openCloseSecurite , setOpenCloseSecurite ] = useState(false);


    // const [ openClose, setOpenClose ] = useState({
    //     fiabilite: true,
    //     respect: true,
    // });

    const menuOpenCloseFiabilite = function(element){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        setOpenCloseFiabilite(element)
    }

    const menuOpenCloseRespect = function(element){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        setOpenCloseRespect(element)
    }

    const menuOpenCloseService = function(element){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        setOpenCloseService(element)
    }

    const menuOpenCloseSecurite = function(element){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        setOpenCloseSecurite(element)
    }

    return (
        <div className='about home'>
            <div className='banner about_banner'>
                <figure>
                    <img className='bannerImg' src={Banner} alt='' />
                </figure>
            </div>
            <div className="a_propos">
                <div className="a_propos_fiabilite">
                    <div className='a_propos_fiabilite_top'>
                        <p>Fiabilité</p>
                        {openCloseFiabilite?<img className='a_propos_fiabilite_top_chevron' onClick={() => menuOpenCloseFiabilite(openCloseFiabilite)} src={Chevron} alt="" />:<img className='a_propos_fiabilite_top_chevron' onClick={() => menuOpenCloseFiabilite(openCloseFiabilite)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseFiabilite?<div className="a_propos_fiabilite_text">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>:null}
                    
                </div>
                <div className="a_propos_respect">
                    <div className='a_propos_respect_top'>
                        <p>Respect</p>
                        {openCloseRespect?<img className='a_propos_respect_top_chevron' onClick={() => menuOpenCloseRespect(openCloseRespect)} src={Chevron} alt="" />:<img className='a_propos_respect_top_chevron' onClick={() => menuOpenCloseRespect(openCloseRespect)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseRespect?<div className="a_propos_respect_text">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>:null}
                </div>
                <div className="a_propos_service">
                    <div className='a_propos_service_top'>
                        <p>Service</p>
                        {openCloseService?<img className='a_propos_service_top_chevron' onClick={() => menuOpenCloseService(openCloseService)} src={Chevron} alt="" />:<img className='a_propos_service_top_chevron' onClick={() => menuOpenCloseService(openCloseService)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseService?<div className="a_propos_service_text">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>:null}
                </div>
                <div className="a_propos_securite">
                    <div className='a_propos_securite_top'>
                        <p>Sécurité</p>
                        {openCloseSecurite?<img className='a_propos_securite_top_chevron' onClick={() => menuOpenCloseSecurite(openCloseSecurite)} src={Chevron} alt="" />:<img className='a_propos_securite_top_chevron' onClick={() => menuOpenCloseSecurite(openCloseSecurite)} src={Chevron_down} alt="" />}
                    </div>
                    {openCloseSecurite?<div className="a_propos_securite_text">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>:null}
                </div>
            </div>
        </div>
    )
}