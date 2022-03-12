import Banner from '../../assets/banner_a_propos.png'
import './styles.scss'
import { useState } from 'react';
import Collapse from '../../components/Collapse';

export default function About() {

    const [ openCloseFiabilite , setOpenCloseFiabilite ] = useState(false);

    const [ openCloseRespect , setOpenCloseRespect ] = useState(false);

    const [ openCloseService , setOpenCloseService ] = useState(false);

    const [ openCloseSecurite , setOpenCloseSecurite ] = useState(false);

    function menuOpenClose(element, title){
        if(element === true){
            element = false
        } else if(element === false){
            element = true
        }
        switch (title) {
            case 'fiabilite':
                setOpenCloseFiabilite(element)
                break;
            case 'respect':
                setOpenCloseRespect(element)
                break;
            case 'service':
                setOpenCloseService(element)
                break;
            case 'securite':
                setOpenCloseSecurite(element)
                break;
            default:
                return null;
        }
    }

    return (
        <div className='about home'>
            <div className='banner about_banner'>
                <figure>
                    <img className='bannerImg' src={Banner} alt='' />
                </figure>
            </div>
            <div className="a_propos">
                <Collapse class={'fiabilite'} title='Fiabilité' state={openCloseFiabilite} function={() => menuOpenClose(openCloseFiabilite, 'fiabilite')}>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Collapse>

                <Collapse class={'respect'} title='Respect' state={openCloseRespect} function={() => menuOpenClose(openCloseRespect, 'respect')}>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>

                <Collapse class={'service'} title='Service' state={openCloseService} function={() => menuOpenClose(openCloseService, 'service')}>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Collapse>

                <Collapse class={'securite'} title='Sécurité' state={openCloseSecurite} function={() => menuOpenClose(openCloseSecurite, 'securite')}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapse>
            </div>
        </div>
    )
}