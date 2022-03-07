import Banner from '../../assets/banner_a_propos.png'
import Chevron from '../../assets/chevron.svg'
import Chevron_down from '../../assets/chevron-down.svg'
import './styles.scss'
import { useState } from 'react';

export default function About() {
    const [ openCloseFiabilite , setOpenCloseFiabilite ] = useState(true);

    const menuOpenCloseFiabilite = function(value){
        if(value === true){
            value = false
        } else if(value === false){
            value = true
        }
        setOpenCloseFiabilite(value)
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
                        <img src={Chevron} alt="" />
                    </div>
                    <div className="a_propos_respect_text">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
                <div className="a_propos_service">
                    <div className='a_propos_service_top'>
                        <p>Service</p>
                        <img src={Chevron} alt="" />
                    </div>
                    <div className="a_propos_service_text">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
                <div className="a_propos_securite">
                    <div className='a_propos_securite_top'>
                        <p>Sécurité</p>
                        <img src={Chevron} alt="" />
                    </div>
                    <div className="a_propos_securite_text">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}