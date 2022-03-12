import Chevron from '../../assets/chevron.svg'
import Chevron_down from '../../assets/chevron-down.svg'

export default function Collapse(props) {

    const openClose = props.state

    const menuOpenClose = props.function

    const title = props.title

    const classname = props.class

    return (
        <div className={'a_propos_' + classname}>
            <div className={'a_propos_' + classname + '_top'}>
                <p>{title}</p>
                {openClose?<img className={'a_propos_' + classname + '_top_chevron'} onClick={menuOpenClose} src={Chevron} alt="" />:<img className={'a_propos_' + classname + '_top_chevron'} onClick={() => menuOpenClose(openClose, title)} src={Chevron_down} alt="" />}
            </div>
            {openClose?<div className={'a_propos_'+ classname +'_text'}>
                {props.children}
            </div>:null}
        </div>
    )
}